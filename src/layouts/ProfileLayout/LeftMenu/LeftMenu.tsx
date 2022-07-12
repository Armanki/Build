import * as React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";

import styles from "../LeftMenu/LeftMenu.module.scss";

import IconBillingInformation from "../../../../src/preloader/images/_primitives/document.png";
import Icon from "../../../../src/preloader/images/_primitives/Frame 3253.png";
import IconReports from "../../../../src/preloader/images/_primitives/Paper.png";
import IconSubscriptions from "../../../../src/preloader/images/_primitives/wallet.png";
import { profileData } from "../../../store/profile/selectors";

const LeftMenu = () => {
  const params = useLocation();
  const data = useSelector(profileData);
  return (
    <div className={styles.buttonsRow}>
      <div className={styles.profileName}>
        {data?.firstName}
        {"  "}
        {data?.lastName}
      </div>
      <Link
        className={styles.buttonLink}
        to={"/profile/account/f8eaf0bb-2432-4317-8b20-d0e0394e1b23"}
      >
        <button
          className={cn(styles.button, {
            [styles.activeButton]: params.pathname.includes("/profile/account"),
          })}
        >
          <div>
            {" "}
            <img className={styles.icon} src={Icon} alt={"Build Optima"} />
            My Account
          </div>
        </button>
      </Link>

      <Link to={"/profile/reports"} className={styles.buttonLink}>
        <button
          className={cn(styles.button, {
            [styles.activeButton]: params.pathname.includes("/profile/reports"),
          })}
        >
          <div>
            {" "}
            <img
              className={styles.icon}
              src={IconReports}
              alt={"Build Optima"}
            />
            Reports
          </div>
        </button>
      </Link>
      <Link to={"/profile/subscriptions"} className={styles.buttonLink}>
        <button
          className={cn(styles.button, {
            [styles.activeButton]: params.pathname.includes(
              "/profile/subscriptions"
            ),
          })}
        >
          <div>
            {" "}
            <img
              className={styles.icon}
              src={IconSubscriptions}
              alt={"Build Optima"}
            />
            Subscriptions
          </div>
        </button>
      </Link>
      <Link to={"/profile/billingInformation"} className={styles.buttonLink}>
        <button
          className={cn(styles.button, {
            [styles.activeButton]: params.pathname.includes(
              "/profile/billingInformation"
            ),
          })}
        >
          <div>
            {" "}
            <img
              className={styles.icon}
              src={IconBillingInformation}
              alt={"Build Optima"}
            />
            Billing Information
          </div>
        </button>
      </Link>
    </div>
  );
};

export default LeftMenu;
