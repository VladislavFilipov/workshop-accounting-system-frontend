import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import styles from "./WorkplacesList.module.scss";

const SkeletonWorkplacesList: FC = () => {
  return (
    <div className={styles.list}>
      {Array(4)
        .fill(true)
        .map((_, i) => (
          <Skeleton key={i} className={styles.skeletonItem} />
        ))}
    </div>
  );
};

export default SkeletonWorkplacesList;
