import { FC, HTMLAttributes } from "react";
import { Link } from "react-router-dom";

import styles from "./Button.module.scss";

interface ILinkButtonProps {
  text: string;
  to: string;
  type?: "confirm" | "danger";
}

const LinkButton: FC<ILinkButtonProps & HTMLAttributes<HTMLAnchorElement>> = ({
  text,
  to,
  type,
  ...props
}) => {
  return (
    <Link
      to={to}
      className={`${styles.button} ${type ? styles[type] : styles.default}`}
      {...props}
    >
      <span className={styles.text}>{text}</span>
    </Link>
  );
};

export default LinkButton;
