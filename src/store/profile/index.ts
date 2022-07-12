import { Reducer } from "redux";

import { profileTypes } from "./types";

const initialState: any = {
  data: {},
  isChanged: false,
  modal: { type: "", isOpen: false },
};

export const profile: Reducer<any, any> = (state = initialState, action) => {
  switch (action.type) {
    case profileTypes.PROFILE_ACCOUNT_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
      };
    }
    case profileTypes.CHANGE_PASSWORD_SUCCESS: {
      return {
        ...state,
        isChanged: true,
        modal: { type: "created", isOpen: true },
      };
    }

    default:
      return state;
  }
};
