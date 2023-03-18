import { FC } from "react";

import cn from "classnames";

import SpinnerIconSVG from "@src/assets/spinner-icon.svg";

// import SpinnerIconSVG from "@src/assets/round.svg";
import styles from "./Spinner.module.scss";

const Spinner: FC<{ size?: "s" | "m" | "l" }> = ({ size = "m" }) => {
  return (
    <div className={styles.container}>
      <SpinnerIconSVG className={cn(styles.svg, styles[size])} />
    </div>
  );
};

export default Spinner;
