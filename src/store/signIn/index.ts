import { Reducer } from "redux";

import { signInTypes } from "./types";

const initialState: any = {
  modal: {
    isOpen: false,
    type: "",
  },
  isCreated: false,
  isRecovered: false,
  loading: false,
  user: null,
  error: null,
};

export const signIn: Reducer<any, any> = (state = initialState, action) => {
  switch (action.type) {
    case signInTypes.REMOVE_LOGIN_STATE: {
      console.log(initialState, "initialState");
      return initialState;
    }
    case signInTypes.CREATE_ACCOUNT_SUCCESS: {
      return {
        ...state,
        isCreated: true,
        modal: { type: "created", isOpen: true },
      };
    }
    case signInTypes.OPEN_MODAL: {
      return {
        ...state,
        modal: action.payload,
      };
    }
    case signInTypes.MAIL_MODAL: {
      return {
        ...state,
        modal: action.payload,
      };
    }
    case signInTypes.LOGIN_ACCOUNT_SUCCESS: {
      return {
        ...state,
        user: {},
        modal: {
          isOpen: false,
          type: "",
        },
      };
    }
    case signInTypes.SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case signInTypes.SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case signInTypes.CLEAN_ERROR: {
      return {
        ...state,
        error: null,
      };
    }
    case signInTypes.RECOVER_PASSWORD_SUCCESS: {
      return {
        ...state,
        isRecovered: true,
      };
    }
    default:
      return state;
  }
};
