import * as React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./ProfileLayout.module.scss";

import SuccessPopup from "../../components/SignUp/SuccessPopup";
import { changePasswordSuccessData } from "../../store/profile/selectors";
import { signInModal } from "../../store/signIn/selectors";
import Header from "../MainLayout/components/Header";
import AccountInformationPopup from "./Account/ProfilePopups/AccountInformationPopup";
import ContactInformationPopup from "./Account/ProfilePopups/ContactInformationPopup";
import PasswordPopup from "./Account/ProfilePopups/PasswordPopup";
import LeftMenu from "./LeftMenu";

export interface LayoutProps {
  children: React.ReactChild | React.ReactChild[];
}

const ProfileLayout = (props: LayoutProps) => {
  const { type, isOpen } = useSelector(signInModal);
  return (
    <div className={styles.row}>
      {type === "accountPopup" && isOpen && <AccountInformationPopup />}
      {type === "contactInformation" && isOpen && <ContactInformationPopup />}
      {type === "password" && isOpen && <PasswordPopup />}

      <Header />
      <div className={styles.profileRow}>
        <LeftMenu />
        {props.children}
      </div>
    </div>
  );
};

export default ProfileLayout;
