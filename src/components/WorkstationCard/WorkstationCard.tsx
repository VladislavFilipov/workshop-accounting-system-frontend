import { FC, PropsWithChildren } from "react";

import cn from "classnames";

import Text from "@src/components/_uikit/Text";
import Title from "@src/components/_uikit/Title";
import workstationStatuses from "@src/data/workstationStatuses";
import { IWorkstationCardProps } from "@src/types/workstation";

import styles from "./WorkstationCard.module.scss";

interface IProps {
  workstation: IWorkstationCardProps;
}
const WorkstationCard: FC<PropsWithChildren<IProps>> = ({
  workstation,
  children,
}) => {
  return (
    <div className={cn(styles.card, styles[`status${workstation.status}`])}>
      <Title variant="h5" className={styles.name}>
        {workstation.name}
      </Title>
      <Text className={styles.status}>
        {workstationStatuses[workstation.status].ruName}
      </Text>
      {children}
      {/* <div className={styles.line}>
        <Text className={styles.status}>
          {workstationStatuses[workstation.status].ruName}
        </Text>
        <Text className={styles.progress}>
          {workstation.amountCurrent} / {workstation.amountTotal}
        </Text>
      </div> */}
    </div>
  );
};

export default WorkstationCard;
