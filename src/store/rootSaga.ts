import { all } from "redux-saga/effects";

import { watchprofileAccountRequest } from "./profile/saga";
import { watchSignInRequest } from "./signIn/saga";

export default function* rootSaga(): Generator {
  yield all([watchSignInRequest(), watchprofileAccountRequest()]);
}
