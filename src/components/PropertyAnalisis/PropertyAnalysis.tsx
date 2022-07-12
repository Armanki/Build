import React, { useCallback, useState } from "react";
import cn from "classnames";

import styles from "./PropertyAnalysis.module.scss";

import UiSelect from "../../layouts/MainLayout/components/sherd/UiSelect";
import background from "../../preloader/images/_primitives/img.png";

const selectOptions = {
  Address: [
    { label: "CalifIfornia 43/56 Smith St.1", value: "f" },
    { label: "CalifIfornia 43/56 Smith St.2", value: "v" },
    { label: "CalifIfornia 43/56 Smith St.3", value: "t" },
    { label: "CalifIfornia 43/56 Smith St.4", value: "c" },
  ],
  APN: [
    { label: "hhh", value: "hhh" },
    { label: "jjjj", value: "jjj" },
    { label: "kkk", value: "kkk" },
  ],
};

const PropertyAnalysis = () => {
  const [activeTab, setActiveTab] = useState("Address");
  const handleTabClick = useCallback(
    (tab: string, e: any) => {
      e.preventDefault();
      setActiveTab(tab);
    },
    [setActiveTab]
  );
  return (
    <>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className={styles.searchContainer}
      >
        <div className={styles.title}>Integrated Property Analysis</div>
        <p className={styles.text}>
          Analyze the residential real estate properties with our carefully
          designed tools.
        </p>
        <div className={styles.uiSelectButtonWrap}>
          <UiSelect options={selectOptions["APN"]} />
          <div className={styles.buttonsWrap}>
            <button
              className={cn(styles.button, {
                [styles.activeButton]: activeTab === "Address",
              })}
              onClick={(e) => handleTabClick("Address", e)}
            >
              Address
            </button>
            <button
              className={cn(styles.button, {
                [styles.activeButton]: activeTab === "APN",
              })}
              onClick={(e) => handleTabClick("APN", e)}
            >
              APN
            </button>
          </div>
        </div>
      </div>
      <p className={styles.textTitle}> Unparalled & Growing Data Coverage</p>
      <div className={styles.textContainer}>
        Buildoptima brings together the technology and people needed to meet the
        challenges of rapid urbanization by providing a platform that encourages
        collaboration between developers, real estate agents, and
        municipalities.
      </div>
    </>
  );
};

export default PropertyAnalysis;
