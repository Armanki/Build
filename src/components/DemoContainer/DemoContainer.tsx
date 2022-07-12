import React from "react";

import styles from "./DemoContainer.module.scss";

import Button from "../../layouts/MainLayout/components/sherd/Button/Button";
import background from "../../preloader/images/_primitives/group-build.png";

const DemoContainer = () => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={styles.leftColumn}>
        <p className={styles.text1}>Property Details</p>
        <p className={styles.text2}>Building Permits</p>
        <p className={styles.text3}>Zoning Analysis</p>
        <p className={styles.text4}>Accessory Building</p>
        <p className={styles.text5}>Zoning Detail</p>
        <p className={styles.text6}>Natural Hazards</p>
      </div>
      <div className={styles.btnContainer}>
        <Button title={"View Demo"} />
      </div>
    </div>
  );
};

export default DemoContainer;
