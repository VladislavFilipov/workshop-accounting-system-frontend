import { FC, useEffect, useMemo } from "react";

import DataContainer from "@src/components/DataContainer/DataContainer";
import Button from "@src/components/_uikit/Button/Button";
import Spinner from "@src/components/_uikit/Spinner/Spinner";
import StatusLabel from "@src/components/_uikit/StatusLabel/StatusLabel";
import Title from "@src/components/_uikit/Title";
import useDetailCraft from "@src/pages/Scanner/_hooks/useDetailCraft";
import CreateKeeping from "@src/pages/Scanner/_routes/Items/KeepingItem/Forms/CreateKeeping";
import EditKeeping from "@src/pages/Scanner/_routes/Items/KeepingItem/Forms/EditKeeping";
import { getCorrectForm } from "@src/pages/Scanner/_routes/Items/_functions";
import useKeepingStore from "@src/store/keeping";

import styles from "./Items.module.scss";

const Items: FC = () => {
  const { detailCraft, error, isLoading } = useDetailCraft();
  const list = useKeepingStore((state) => state.list);
  const status = useKeepingStore((state) => state.status);
  const resetList = useKeepingStore((state) => state.resetList);
  // const getKeepingByDetail = useKeepingStore(
  //   (state) => state.getKeepingByDetail,
  // );
  // const listByDetail = useMemo<IKeeping[]>(() => {
  //   console.log("list useMemo", list);
  //   if (!detailCraft) return [];
  //   return getKeepingByDetail(detailCraft.details_id);
  // }, [detailCraft, list]);
  // console.log("listByDetail", listByDetail);

  return (
    <DataContainer className={styles.items} isLoading={isLoading} error={error}>
      <Title variant="h3" className={styles.headerAdd}>
        Получены данные
      </Title>
      {detailCraft && <CreateKeeping detail={detailCraft?.details_id} />}
      <Title variant="h3" className={styles.headerList}>
        Добавлено{" "}
        <span className={styles.listLength}>
          {list.length} {getCorrectForm(list.length)}
        </span>
      </Title>
      <ul>
        {list.map((keeping) => (
          <li key={keeping.id}>
            <EditKeeping keeping={keeping} />
          </li>
        ))}
      </ul>
      <div className={styles.btnWrap}>
        {status === "waiting" && list.length > 0 && (
          <Button
            text="Подтвердить"
            className={styles.acceptBtn}
            onClick={resetList}
          />
        )}
        {status === "loading" && <Spinner />}
        {status === "success" && (
          <StatusLabel text="Успешно добавлено" type="success" />
        )}
      </div>
    </DataContainer>
  );
};

export default Items;
