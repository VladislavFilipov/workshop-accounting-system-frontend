import { FC } from "react";

import DataContainer from "@src/components/DataContainer/DataContainer";
import DetailCard from "@src/pages/Scanner/DetailCard/DetailCard";
import DetailCraftsList from "@src/pages/Scanner/DetailCraftsList/DetailCraftsList";
import useDetailCraft from "@src/pages/Scanner/_hooks/useDetailCraft";

const Stamps: FC = () => {
  const { detailCraft, error, isLoading } = useDetailCraft();

  return (
    <DataContainer isLoading={isLoading} error={error}>
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
