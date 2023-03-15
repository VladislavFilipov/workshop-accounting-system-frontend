import cn from "classnames";

import DataContainer from "@src/components/DataContainer/DataContainer";
import Text from "@src/components/_uikit/Text";
import detailStatuses from "@src/data/detailStatuses";
import useActiveWorksList from "@src/pages/ActiveWorks/_hooks/useActiveWorksList";

import styles from "./ActiveWorksList.module.scss";

const ActiveWorksList = () => {
  const { activeWorks, isLoading, error } = useActiveWorksList();

  return (
    <DataContainer isLoading={isLoading} error={error}>
      <ul className={styles.list}>
        <li className={cn(styles.work, styles.head)}>
          <Text>Дата</Text>
          <Text>Код чертежа</Text>
          <Text>Этап</Text>
          <Text>Статус</Text>
        </li>
        {activeWorks?.map((work) => (
          <li key={work.id} className={styles.work}>
            <Text size="s">{work.date}</Text>
            <Text size="s">{work.draftNumber}</Text>
            <Text size="s">{work.stage}</Text>
            <Text size="s">{detailStatuses[work.status].name}</Text>
          </li>
        ))}
      </ul>
    </DataContainer>
  );
};

export default ActiveWorksList;
