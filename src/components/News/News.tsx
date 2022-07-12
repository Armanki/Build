import { useState } from "react";

import styles from "./News.module.scss";

import { newsInfo } from "../../data/News";
import background from "../../preloader/images/_primitives/news-bg.png";
import SignUp from "../SignUp";
import SingIn from "../singInPopup/SingIn";
import Carts from "./Carts";

const News = () => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={styles.name}>News & Updates</div>
      <div className={styles.cardsWrap}>
        {newsInfo.map((el) => (
          <div className={styles.card} key={el.id}>
            <Carts
              title={el.title}
              data={el.data}
              description={el.description}
            />
          </div>
        ))}
      </div>
      <a className={styles.more}>More</a>
    </div>
  );
};

export default News;
