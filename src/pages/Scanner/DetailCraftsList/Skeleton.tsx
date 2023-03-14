import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import styles from "./DetailCraftsList.module.scss";

const SkeletonDetailCraftList: FC = () => {
  return (
    <div className={styles.skeleton}>
      {Array(2)
        .fill(true)
        .map((_, i) => (
          <div key={i} className={styles.stageItem}>
            <Skeleton className={styles.stageStatus} width={200} />
            <Skeleton className={styles.stageName} width={400} />
            <Skeleton className={styles.stageDesc} />
          </div>
        ))}
    </div>
  );
};

export default SkeletonDetailCraftList;
