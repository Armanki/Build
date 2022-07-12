import { combineReducers } from "redux";

import { profile } from "./profile";
import { signIn } from "./signIn";

const rootReducer = combineReducers({
  signIn,
  profile,
});

export default rootReducer;
