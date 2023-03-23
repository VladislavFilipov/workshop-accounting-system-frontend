import { FC } from "react";

import KeepingForm from "@src/pages/Scanner/_routes/Items/KeepingItem/Forms/KeepingForm";
import { IDetail } from "@src/types/detail";
import { IKeeping } from "@src/types/keeping";

const iniTIalData: IKeeping = {
  id: 0,
  detail: {} as IDetail,
  detailAmount: 1,
  keepingBox: "box",
  keepingBoxAmount: 1,
};

interface IProps {
  detail: IDetail;
}

const CreateKeeping: FC<IProps> = ({ detail }) => {
  const handleSubmit = (data: IKeeping) => {
    console.log("handleSubmit", data);
  };

  return (
    <div>
      <KeepingForm data={{ ...iniTIalData, detail }} handle={handleSubmit} />
    </div>
  );
};

export default CreateKeeping;
