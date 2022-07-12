import styles from "./Carts.module.scss";
import background from "../../../preloader/images/_primitives/Rectangle.svg";

const Carts = ({ title, data, description }: any) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.nameText}
        style={{ backgroundImage: `url(${background})` }}
      >
        <h1 className={styles.name}>{title}</h1>
        <p className={styles.data}>{data}</p>
        <p className={styles.text}>{description}</p>
      </div>
    </div>
  );
};

export default Carts;
