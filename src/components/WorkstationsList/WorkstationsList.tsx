import { FC, ReactNode } from "react";

import WorkstationCard from "@src/components/WorkstationCard";
import { IWorkstationCardProps } from "@src/types/workstation";

import styles from "./WorkstationsList.module.scss";

const WorkstationsList: FC<{
  workstations: IWorkstationCardProps[];
  workstationBody: (workstation: any) => ReactNode;
}> = ({ workstations }) => {
  return (
    <ul className={styles.list}>
      {/* {workstations.map((workstation) => (
        <li key={workstation.id}>
          <WorkstationCard workstation={workstation} />
        </li>
        {workstationBody(workstation)}
      ))} */}
    </ul>
  );
};

export default WorkstationsList;
