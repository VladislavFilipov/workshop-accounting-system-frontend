import { FC } from "react";

import WorkstationCard from "@src/components/WorkstationCard";
import { IWorkstation } from "@src/types/workstation";

import styles from "./WorkstationsList.module.scss";

const WorkstationsList: FC<{ workstations: IWorkstation[] }> = ({
  workstations,
}) => {
  return (
    <ul className={styles.list}>
      {workstations.map((workstation) => (
        <li key={workstation.id}>
          <WorkstationCard workstation={workstation} />
        </li>
      ))}
    </ul>
  );
};

export default WorkstationsList;
