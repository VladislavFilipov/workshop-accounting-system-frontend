import { FC } from "react";

import StatusLabel from "@src/components/_uikit/StatusLabel/StatusLabel";
import DetailCard from "@src/pages/Scanner/DetailCard/DetailCard";
import DetailCraftsList from "@src/pages/Scanner/DetailCraftsList/DetailCraftsList";
import useDetailCraft from "@src/pages/Scanner/_hooks/useDetailCraft";

const Stamps: FC = () => {
  const { detailCraft, error } = useDetailCraft();

  return (
    <div>
      <>
        {error && <StatusLabel text={(error as Error).message} type="error" />}

        {detailCraft && (
          <>
            <DetailCard detailCraft={detailCraft} />
            <DetailCraftsList detailCraft={detailCraft} />
          </>
        )}
      </>
    </div>
  );
};

export default Stamps;
