import { FC } from "react";

import cn from "classnames";

import Text from "@src/components/_uikit/Text";
import Title from "@src/components/_uikit/Title";
import workstationStatuses from "@src/data/workstationStatuses";
import { IWorkstation } from "@src/types/workstation";

import styles from "./WorkstationCard.module.scss";

const WorkstationCard: FC<{ workstation: IWorkstation }> = ({
  workstation,
}) => {
  return (
    <div className={cn(styles.card, styles[`status${workstation.status}`])}>
      <Title variant="h5" className={styles.name}>
        {workstation.name}
      </Title>
      <div className={styles.line}>
        <Text className={styles.status}>
          {workstationStatuses[workstation.status].ruName}
        </Text>
        <Text className={styles.progress}>
          {workstation.amountCurrent} / {workstation.amountTotal}
        </Text>
      </div>
    </div>
  );
};

export default WorkstationCard;
