import { FC } from "react";

import DataContainer from "@src/components/DataContainer/DataContainer";
import useDetailCraft from "@src/pages/AccountingProduction/_hooks/useDetailCraft";
import DetailCard from "@src/pages/AccountingProduction/_routes/Stamps/DetailCard/DetailCard";
import DetailCraftsList from "@src/pages/AccountingProduction/_routes/Stamps/DetailCraftsList/DetailCraftsList";

import styles from "./Stamps.module.scss";

const Stamps: FC = () => {
  const { detailCraft, error, isLoading } = useDetailCraft();

  return (
    <DataContainer
      className={styles.stamps}
      isLoading={isLoading}
      error={error}
    >
      {detailCraft && (
        <>
          <DetailCard detailCraft={detailCraft} />
          <DetailCraftsList detailCraft={detailCraft} />
        </>
      )}
    </DataContainer>
  );
};

export default Stamps;
