import { FC, HTMLAttributes } from "react";

import cn from "classnames";

import styles from "./Button.module.scss";

interface IButtonProps {
  text: string;
  type?: "confirm" | "danger";
}

const Button: FC<IButtonProps & HTMLAttributes<HTMLButtonElement>> = ({
  text,
  type,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(styles.button, type ? styles[type] : styles.default, {
        [`${className}`]: !!className,
      })}
      {...props}
    >
      <span className={styles.text}>{text}</span>
    </button>
  );
};

export default Button;
