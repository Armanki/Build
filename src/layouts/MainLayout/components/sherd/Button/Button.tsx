import React, { ReactElement } from "react";
import cn from "classnames";

import styles from "./Button.module.scss";

type ButtonType = {
  title: string | ReactElement;
  className?: string;
  [key: string]: unknown;
};

const Button: React.FC<ButtonType> = ({ title, className, ...res }) => {
  return (
    <button {...res} className={cn(styles.button, className)}>
      <span>{title}</span>
    </button>
  );
};
export default Button;
