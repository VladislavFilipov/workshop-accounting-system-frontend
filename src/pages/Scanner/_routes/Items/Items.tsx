import { FC } from "react";

import DataContainer from "@src/components/DataContainer/DataContainer";
import useDetailCraft from "@src/pages/Scanner/_hooks/useDetailCraft";
import CreateKeeping from "@src/pages/Scanner/_routes/Items/KeepingItem/Forms/CreateKeeping";

import styles from "./Items.module.scss";

const Items: FC = () => {
  const { detailCraft, error, isLoading } = useDetailCraft();
  return (
    <DataContainer className={styles.items} isLoading={isLoading} error={error}>
      {detailCraft && <CreateKeeping detail={detailCraft?.details_id} />}
    </DataContainer>
  );
};

export default Items;
