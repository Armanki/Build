import * as React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import styles from "./Header.module.scss";
import Build from "../../../../preloader/images/_primitives/buildOptima.svg";

import ForgotPassword from "../../../../components/forgotPassword/ForgotPassword";
import SignOut from "../../../../components/signOut/SignOut";
import SignUp from "../../../../components/SignUp";
import SuccessPopup from "../../../../components/SignUp/SuccessPopup";
import SingIn from "../../../../components/singInPopup/SingIn";
import UserAvatar from "../../../../components/userAvatarPopup/UserAvatar";
import { useActions } from "../../../../hooks/useActions";
import { signInModal, userSelector } from "../../../../store/signIn/selectors";
const Header = () => {
  const user = useSelector(userSelector);
  const { openSignInModal } = useActions();
  const { type, isOpen } = useSelector(signInModal);
  const togglePopup = () => {
    openSignInModal({ type: "signIn", isOpen: true });
  };
  return (
    <>
      <div className={styles.header}>
        <div>
          <img
            className={styles.buildOptima}
            src={Build}
            alt={"Build Optima"}
          />
        </div>
        {user || localStorage.getItem("token") ? (
          <button className={styles.signIn}>
            <SignOut />
          </button>
        ) : (
          <button className={styles.signIn} onClick={togglePopup}>
            Sign In
          </button>
        )}
      </div>
      {type === "signIn" && isOpen && <SingIn />}
      {type === "avatarPopup" && isOpen && <UserAvatar />}
      {type === "forgotPassword" && isOpen && <ForgotPassword />}
      {type === "signUp" && isOpen && <SignUp />}
      {type === "created" && isOpen && <SuccessPopup />}
    </>
  );
};

export default Header;
