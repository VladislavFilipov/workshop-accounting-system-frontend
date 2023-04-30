import { FC } from "react";

import DataContainer from "@src/components/DataContainer/DataContainer";
import useDetail from "@src/pages/AccountingProduction/_hooks/useDetail";
import DetailCard from "@src/pages/AccountingProduction/_routes/Stamps/DetailCard/DetailCard";
import DetailCraftsList from "@src/pages/AccountingProduction/_routes/Stamps/DetailCraftsList/DetailCraftsList";
import { IDetailCraft } from "@src/types/detailCraft";

import styles from "./Stamps.module.scss";

const Stamps: FC = () => {
  const {
    detail,
    errorDetail,
    isLoadingDetail,
    stamp,
    errorStamp,
    isLoadingStamp,
  } = useDetail();

  return (
    <DataContainer
      className={styles.stamps}
      isLoading={isLoadingDetail || isLoadingStamp}
      error={errorDetail || errorStamp}
    >
      {detail && (
        <>
          <DetailCard
            detailCraft={{} as IDetailCraft}
            detail={detail}
            stamp={stamp}
          />
          <DetailCraftsList detail={detail} />
        </>
      )}
    </DataContainer>
  );
};

export default Stamps;
