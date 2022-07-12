import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import styles from "./MyAccountContant.module.scss";

import { useActions } from "../../../hooks/useActions";
import { profileData } from "../../../store/profile/selectors";
import MyAccountContantChild from "./MyAccountCild/MyAccountContantChild";

const MyAccountContant = () => {
  const id = "f8eaf0bb-2432-4317-8b20-d0e0394e1b23";
  const params = useLocation();
  const { profileAccount } = useActions();
  const data = useSelector(profileData);

  useEffect(() => {
    if (params.pathname.includes(id)) {
      profileAccount(id);
    }
  }, []);
  return (
    <div className={styles.row}>
      <div className={styles.childrenTitle}>My Account</div>
      <MyAccountContantChild
        title={"Account"}
        firstContant={"Name "}
        lastContant={"Company "}
        button={" Edit"}
        accountType={"accountPopup"}
        firstContantValue={data?.firstName}
        lastContantValue={"BuildOptima"}
      />
      <MyAccountContantChild
        title={"Contact "}
        firstContant={"Email "}
        lastContant={"Phone "}
        button={" Edit"}
        accountType={"contactInformation"}
        firstContantValue={data?.email}
        lastContantValue={data?.phone}
      />
      <MyAccountContantChild
        title={"Password  "}
        firstContant={"A strong password helps protect your Google account."}
        lastContant={"Password"}
        button={" Change"}
        accountType={"password"}
        firstContantValue={""}
        lastContantValue={"******"}
      />
    </div>
  );
};
export default MyAccountContant;
