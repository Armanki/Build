import React, { ReactElement } from "react";
import { useSelector } from "react-redux";

import styles from "./MyAccountChild.module.scss";

import { useActions } from "../../../../hooks/useActions";
import { signInModal } from "../../../../store/signIn/selectors";
import AccountInformationPopup from "../ProfilePopups/AccountInformationPopup";
import ContactInformationPopup from "../ProfilePopups/ContactInformationPopup";
import PasswordPopup from "../ProfilePopups/PasswordPopup";

type Props = {
  title: string;
  firstContant: string;
  lastContant: string;
  button: string;
  accountType: string;
  lastContantValue?: string;
  firstContantValue?: string;
};

const MyAccountContantChild: React.FC<Props> = ({
  lastContantValue,
  firstContantValue,
  title,
  firstContant,
  lastContant,
  button,
  accountType,
}) => {
  const { openSignInModal } = useActions();

  return (
    <div className={styles.accountRow}>
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.info}>
          {firstContant}
          {firstContantValue}
        </div>
        <div className={styles.info}>
          {lastContant}
          {lastContantValue}
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => openSignInModal({ type: accountType, isOpen: true })}
          className={styles.edit}
        >
          {button}
        </button>
      </div>
    </div>
  );
};
export default MyAccountContantChild;
