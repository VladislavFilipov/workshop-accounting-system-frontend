import { FC, useEffect, useMemo } from "react";

import DataContainer from "@src/components/DataContainer/DataContainer";
import Title from "@src/components/_uikit/Title";
import useDetailCraft from "@src/pages/Scanner/_hooks/useDetailCraft";
import CreateKeeping from "@src/pages/Scanner/_routes/Items/KeepingItem/Forms/CreateKeeping";
import EditKeeping from "@src/pages/Scanner/_routes/Items/KeepingItem/Forms/EditKeeping";
import useKeepingStore from "@src/store/keeping";
import { IKeeping } from "@src/types/keeping";

import styles from "./Items.module.scss";

const Items: FC = () => {
  const { detailCraft, error, isLoading } = useDetailCraft();
  const getKeepingByDetail = useKeepingStore(
    (state) => state.getKeepingByDetail,
  );
  const list = useMemo<IKeeping[]>(() => {
    if (!detailCraft) return [];
    return getKeepingByDetail(detailCraft.details_id);
  }, [detailCraft]);

  return (
    <DataContainer className={styles.items} isLoading={isLoading} error={error}>
      <Title variant="h3" className={styles.headerAdd}>
        Добавить на склад
      </Title>
      {detailCraft && <CreateKeeping detail={detailCraft?.details_id} />}
      <Title variant="h3" className={styles.headerList}>
        На складе
      </Title>
      <ul>
        {list.map((keeping) => (
          <li key={keeping.id}>
            <EditKeeping keeping={keeping} />
          </li>
        ))}
      </ul>
    </DataContainer>
  );
};

export default Items;
