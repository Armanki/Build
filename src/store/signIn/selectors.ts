import { createSelector } from "reselect";

const signInSelector = (state: any) => state.signIn;

const signInModal = createSelector(signInSelector, (signIn) => signIn.modal);
const userSelector = createSelector(signInSelector, (signIn) => signIn.user);
const signIn = createSelector(signInSelector, (signIn) => signIn.isAuth);
const errorSelector = createSelector(signInSelector, (signIn) => signIn.error);
const isRecoveredSelector = createSelector(
  signInSelector,
  (signIn) => signIn.isRecovered
);

const loadingSelector = createSelector(
  signInSelector,
  (signIn) => signIn.loading
);

export {
  errorSelector,
  isRecoveredSelector,
  loadingSelector,
  signIn,
  signInModal,
  userSelector,
};
