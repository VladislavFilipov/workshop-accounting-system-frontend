import { FC } from "react";

import cn from "classnames";

import Text from "@src/components/_uikit/Text";
import Title from "@src/components/_uikit/Title";
import workplaceStatuses from "@src/data/workplaceStatuses";
import { IWorkplace } from "@src/types/workplace";

import styles from "./WorkplaceCard.module.scss";

const WorkplaceCard: FC<{ workplace: IWorkplace }> = ({ workplace }) => {
  return (
    <div className={cn(styles.card, styles[`status${workplace.status}`])}>
      <Title variant="h5" className={styles.name}>
        {workplace.name}
      </Title>
      <div className={styles.line}>
        <Text className={styles.status}>
          {workplaceStatuses[workplace.status].ruName}
        </Text>
        <Text className={styles.progress}>
          {workplace.amountCurrent} / {workplace.amountTotal}
        </Text>
      </div>
    </div>
  );
};

export default WorkplaceCard;
