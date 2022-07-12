import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import * as profileActions from "../store/profile/actions";
import * as signInActions from "../store/signIn/actions";

export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(
    () =>
      bindActionCreators(
        {
          ...signInActions,
          ...profileActions,
        },
        dispatch
      ),
    [dispatch]
  );
};
