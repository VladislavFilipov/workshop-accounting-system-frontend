import { FC } from "react";

import WorkplaceCard from "@src/components/WorkplaceCard";
import { IWorkplace } from "@src/types/workplace";

import styles from "./WorkplacesList.module.scss";

const WorkplacesList: FC<{ workplaces: IWorkplace[] }> = ({ workplaces }) => {
  return (
    <ul className={styles.list}>
      {workplaces.map((workplace) => (
        <li key={workplace.id}>
          <WorkplaceCard workplace={workplace} />
        </li>
      ))}
    </ul>
  );
};

export default WorkplacesList;
