import { createSelector } from "reselect";

const profileSelector = (state: any) => state.profile;

const profileData = createSelector(profileSelector, (profile) => profile.data);
const changePasswordSuccessData = createSelector(
  profileSelector,
  (profile) => profile.modal
);
const isChangedSelector = createSelector(
  profileSelector,
  (profile) => profile.isChanged
);

export { changePasswordSuccessData, isChangedSelector, profileData };
