/*
  Wrapper for all inputs provides base structure including label and error
*/
import { FC, PropsWithChildren } from "react";

import cn from "classnames";

import styles from "./Wrap.module.scss";

interface IProps {
  label?: string;
  className?: string;
  error?: string;
}

const Wrap: FC<PropsWithChildren<IProps>> = ({
  children,
  label,
  className,
  error,
}) => {
  return (
    <label className={cn(styles.wrap, { [`${className}`]: !!className })}>
      {children}
      {label && <div className={styles.label}>{label}</div>}
      {error && <div className={styles.error}>{error}</div>}
    </label>
  );
};

export default Wrap;
