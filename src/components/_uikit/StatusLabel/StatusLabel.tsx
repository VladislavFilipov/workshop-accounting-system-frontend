import { FC } from "react";

import cn from "classnames";

import styles from "./StatusLabel.module.scss";

interface IStatusLabelProps {
  className?: string;
  status?: string | number;
  text: string;
  type: "success" | "warning" | "error";
}

const StatusLabel: FC<IStatusLabelProps> = ({
  className,
  status,
  text,
  type,
}) => {
  return (
    <div
      className={cn(styles.statusLabel, styles[type], {
        [`${className}`]: !!className,
      })}
    >
      {status && <span className={styles.status}>{status}</span>}
      <span>{text}</span>
    </div>
  );
};

export default StatusLabel;
