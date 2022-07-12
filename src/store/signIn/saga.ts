import axios from "axios";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { routes } from "../../constance/routes";
import {
  createAccountSuccess,
  loginAccountSuccess,
  recoverPasswordSuccess,
  setErrorAction,
  setLoadingAction,
} from "./actions";
import { signInTypes } from "./types";

export function* createAccountAsync({
  payload,
}: any): Generator<any, any, any> {
  try {
    yield put(setLoadingAction(true));
    const { data } = yield call(axios.post, routes.registration, payload);
    if (data) {
      yield put(createAccountSuccess());
    }
  } catch ({ response }) {
    const errors: any = response;
    const newError =
      errors?.data?.message || errors?.data?.debug || errors?.data;

    yield put(setErrorAction([newError]));
  } finally {
    yield put(setLoadingAction(false));
  }
}
export function* recoverAccountAsync({
  payload,
}: any): Generator<any, any, any> {
  try {
    yield put(setLoadingAction(true));
    const data = yield call(axios.post, routes.recover, payload);
    if (data) {
      yield put(recoverPasswordSuccess());
    }
  } catch ({ response }) {
    const errors: any = response;
    const newError =
      errors?.data?.message || errors?.data?.debug || errors?.data;
    yield put(setErrorAction([newError]));
  } finally {
    yield put(setLoadingAction(false));
  }
}
export function* changePasswordAsync({
  payload,
}: any): Generator<any, any, any> {
  try {
    yield put(setLoadingAction(true));
    const data = yield call(axios.put, routes.forgotPassword, payload.data);
    if (data) {
      payload.history.push("/");
    }
  } catch ({ response }) {
    const errors: any = response;
    const newError =
      errors?.data?.message || errors?.data?.debug || errors?.data;
    yield put(setErrorAction([newError]));
  } finally {
    yield put(setLoadingAction(false));
  }
}
export function* loginAccountAsync({ payload }: any): Generator<any, any, any> {
  try {
    yield put(setLoadingAction(true));
    const { data } = yield call(axios.post, routes.login, payload);

    if (data) {
      localStorage.setItem(
        "token",
        JSON.stringify({
          accessToken: data.accessToken,
          refreshTokenId: data.refreshTokenId,
        })
      );
      yield put(loginAccountSuccess());
    }
  } catch ({ response }) {
    const errors: any = response;
    const newError =
      errors?.data?.message || errors?.data?.debug || errors?.data;
    yield put(setErrorAction([newError]));
  } finally {
    yield put(setLoadingAction(false));
  }
}

export function* refresh(
  callback: any,
  params: any,
  response: any
): Generator<any, any, any> {
  const token = JSON.parse(localStorage.getItem("token") || "");
  if (response.status === 403) {
    try {
      const { data } = yield call(axios.post, routes.refreshToken, {
        refreshToken: token?.refreshTokenId,
      });
      if (data) {
        localStorage.setItem(
          "token",
          JSON.stringify({
            accessToken: data.accessToken,
            refreshTokenId: data.refreshToken,
          })
        );
        yield callback(params);
      }
    } catch (err) {
      console.log(err);
    }
  }
}

function* watchSignInRequest(): Generator {
  yield all([
    takeLatest(signInTypes.FORGOT_PASSWORD, changePasswordAsync),
    takeLatest(signInTypes.RECOVER_PASSWORD, recoverAccountAsync),
    takeLatest(signInTypes.CREATE_ACCOUNT, createAccountAsync),
    takeEvery(signInTypes.LOGIN_ACCOUNT, loginAccountAsync),
  ]);
}

export { watchSignInRequest };
