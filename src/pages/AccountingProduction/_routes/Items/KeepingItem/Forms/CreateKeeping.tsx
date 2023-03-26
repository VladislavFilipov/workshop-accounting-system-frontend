import { FC } from "react";

import KeepingForm from "@src/pages/AccountingProduction/_routes/Items/KeepingItem/Forms/KeepingForm";
import iniTIalData from "@src/pages/AccountingProduction/_routes/Items/KeepingItem/Forms/_initialData";
import useKeepingStore from "@src/store/keeping";
import { IDetail } from "@src/types/detail";
import { IKeeping } from "@src/types/keeping";

interface IProps {
  detail: IDetail;
}

const CreateKeeping: FC<IProps> = ({ detail }) => {
  const addKeeping = useKeepingStore((state) => state.addKeeping);
  const handleSubmit = (data: IKeeping) => {
    console.log("handleSubmit", data);
    addKeeping(data);
  };

  return (
    <div>
      <KeepingForm data={{ ...iniTIalData, detail }} handle={handleSubmit} />
    </div>
  );
};

export default CreateKeeping;
