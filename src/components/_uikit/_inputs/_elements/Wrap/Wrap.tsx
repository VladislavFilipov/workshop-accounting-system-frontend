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
      {label && <div className={styles.label}>{label}</div>}
      {children}
      {error && <div className={styles.error}>{error}</div>}
    </label>
  );
};

export default Wrap;
