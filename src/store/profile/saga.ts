import { all, call, put, takeLatest } from "redux-saga/effects";

import { routes } from "../../constance/routes";
import { request } from "../../services";
import { refresh } from "../signIn/saga";
import {
  changePasswordSuccess,
  profileAccountSuccess,
  setErrorAction,
  setLoadingAction,
} from "./actions";
import { profileTypes } from "./types";

export function* profileAccountAsync({
  payload,
}: any): Generator<any, any, any> {
  try {
    yield put(setLoadingAction(true));
    const { data } = yield call(
      request,
      "GET",
      "https://3.95.166.178/api/v1/user/fetch/f8eaf0bb-2432-4317-8b20-d0e0394e1b23"
    );
    console.log(data, 6666666666666666);
    if (data) {
      yield put(profileAccountSuccess(data));
    }
  } catch ({ response }) {
    const errors: any = response;
    const newError =
      errors?.data?.message || errors?.data?.debug || errors?.data;
    yield refresh(profileAccountAsync, payload, response);
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
    console.log(payload, 222222222);
    const data = yield call(
      request,
      "PUT",
      routes.changePassword,
      payload.data
    );
    console.log(data, 1111111111111);

    if (data.status === 200) {
      yield put(changePasswordSuccess());
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

function* watchprofileAccountRequest(): Generator {
  yield all([
    takeLatest(profileTypes.PROFILE_ACCOUNT, profileAccountAsync),
    takeLatest(profileTypes.CHANGE_PASSWORD, changePasswordAsync),
  ]);
}

export { watchprofileAccountRequest };
