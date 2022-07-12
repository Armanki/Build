import { signInTypes } from "../signIn/types";
import { profileTypes } from "./types";

const profileAccount = (id: any) => {
  return {
    type: profileTypes.PROFILE_ACCOUNT,
    payload: id,
  };
};

const profileAccountSuccess = (data: any) => {
  return {
    type: profileTypes.PROFILE_ACCOUNT_SUCCESS,
    payload: { data },
  };
};
const changePassword = (data: any) => {
  return {
    type: profileTypes.CHANGE_PASSWORD,
    payload: { data },
  };
};
const changePasswordSuccess = () => {
  return {
    type: profileTypes.CHANGE_PASSWORD_SUCCESS,
  };
};
const setErrorAction = (error: any) => {
  return {
    type: signInTypes.SET_ERROR,
    payload: error,
  };
};
const setLoadingAction = (loading: boolean) => {
  return {
    type: signInTypes.SET_LOADING,
    payload: loading,
  };
};
export {
  changePassword,
  changePasswordSuccess,
  profileAccount,
  profileAccountSuccess,
  setErrorAction,
  setLoadingAction,
};
