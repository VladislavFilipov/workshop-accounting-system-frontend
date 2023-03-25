import { FC } from "react";

import DataContainer from "@src/components/DataContainer/DataContainer";
import PackstationCard from "@src/components/PackstationCard";
import usePackstations from "@src/pages/Packstations/_hooks/usePackstations";

const PackstationInfo: FC = () => {
  const [packstations, isLoading, error] = usePackstations();

  const packstation = packstations && packstations[0];
  return (
    <DataContainer isLoading={isLoading} error={error}>
      {packstation && <PackstationCard packstation={packstation} />}
    </DataContainer>
  );
};

export default PackstationInfo;
