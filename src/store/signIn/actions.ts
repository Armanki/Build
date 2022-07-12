import { signInTypes } from "./types";

const createAccount = (data: any) => {
  return {
    type: signInTypes.CREATE_ACCOUNT,
    payload: data,
  };
};
const createAccountSuccess = () => {
  return {
    type: signInTypes.CREATE_ACCOUNT_SUCCESS,
  };
};
const refreshToken = (accessToken: string) => (dispatch: any) => {
  dispatch({
    type: signInTypes.REFRESH_TOKEN,
    payload: accessToken,
  });
};

const setLoadingAction = (loading: boolean) => {
  return {
    type: signInTypes.SET_LOADING,
    payload: loading,
  };
};

const openSignInModal = ({
  type,
  isOpen,
}: {
  type: string;
  isOpen: boolean;
}) => {
  return {
    type: signInTypes.OPEN_MODAL,
    payload: { type, isOpen },
  };
};
const openGmailModal = ({
  type,
  isOpen,
}: {
  type: string;
  isOpen: boolean;
}) => {
  return {
    type: signInTypes.MAIL_MODAL,
    payload: { type, isOpen },
  };
};
const setErrorAction = (error: any) => {
  return {
    type: signInTypes.SET_ERROR,
    payload: error,
  };
};
const loginAccountSuccess = () => {
  return {
    type: signInTypes.LOGIN_ACCOUNT_SUCCESS,
  };
};
const loginAccount = (data: any) => {
  return {
    type: signInTypes.LOGIN_ACCOUNT,
    payload: data,
  };
};
const recoverPasswordSuccess = () => {
  return {
    type: signInTypes.RECOVER_PASSWORD_SUCCESS,
  };
};
const recoverPassword = (data: any) => {
  return {
    type: signInTypes.RECOVER_PASSWORD,
    payload: data,
  };
};
const cleanErrorAction = () => {
  return {
    type: signInTypes.CLEAN_ERROR,
    payload: null,
  };
};
const forgotPassword = (data: any, history: any) => {
  return {
    type: signInTypes.FORGOT_PASSWORD,
    payload: { data, history },
  };
};
const removeLoginState = () => {
  return {
    type: signInTypes.REMOVE_LOGIN_STATE,
  };
};
export {
  cleanErrorAction,
  createAccount,
  createAccountSuccess,
  forgotPassword,
  loginAccount,
  loginAccountSuccess,
  openGmailModal,
  openSignInModal,
  recoverPassword,
  recoverPasswordSuccess,
  refreshToken,
  removeLoginState,
  setErrorAction,
  setLoadingAction,
};
