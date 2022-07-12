import styles from "./MessengerProven.module.scss";

import { message } from "../../data/MessengerProven";

const MessengerProven = () => {
  return (
    <div className={styles.container}>
      {message.map((e) => (
        <div className={styles.message} key={e.id}>
          <div className={styles.top}>
            <img src={e.img} alt="logo" className={styles.img} />
            <h3 className={styles.title}>{e.title}</h3>
          </div>
          <p className={styles.text}>{e.text}</p>
        </div>
      ))}
    </div>
  );
};

export default MessengerProven;
