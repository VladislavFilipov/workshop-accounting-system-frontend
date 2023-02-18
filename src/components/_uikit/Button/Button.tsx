import { FC, HTMLAttributes } from "react";

import styles from "./Button.module.scss";

interface IButtonProps {
  text: string;
  type?: "confirm" | "danger";
}

const Button: FC<IButtonProps & HTMLAttributes<HTMLButtonElement>> = ({
  text,
  type,
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${type ? styles[type] : ""}`}
      {...props}
    >
      <span className={styles.text}>{text}</span>
    </button>
  );
};

export default Button;
