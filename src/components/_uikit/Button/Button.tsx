import { FC, HTMLAttributes, ReactNode } from "react";

import cn from "classnames";

import styles from "./Button.module.scss";

interface IButtonProps {
  text: string;
  type?: "confirm" | "danger";
  size?: "s" | "m" | "l";
  icon?: ReactNode;
}

const Button: FC<IButtonProps & HTMLAttributes<HTMLButtonElement>> = ({
  text,
  type,
  size = "m",
  icon,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        styles.button,
        styles[`${size}Size`],
        type ? styles[type] : styles.default,
        {
          [`${className}`]: !!className,
        },
      )}
      {...props}
    >
      {icon && <div className={styles.icon}>{icon}</div>}
      <span className={styles.text}>{text}</span>
    </button>
  );
};

export default Button;
