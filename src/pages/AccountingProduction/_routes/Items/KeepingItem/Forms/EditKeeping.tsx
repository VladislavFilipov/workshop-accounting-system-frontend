import { FC } from "react";

import KeepingForm from "@src/pages/AccountingProduction/_routes/Items/KeepingItem/Forms/KeepingForm";
import useKeepingStore from "@src/store/keeping";
import { IKeeping } from "@src/types/keeping";

interface IProps {
  keeping: IKeeping;
}

const EditKeeping: FC<IProps> = ({ keeping }) => {
  const updateKeeping = useKeepingStore((state) => state.updateKeeping);
  const deleteKeeping = useKeepingStore((state) => state.deleteKeeping);
  const handleSubmit = (data: IKeeping) => {
    updateKeeping(data);
  };

  const handleDelete = (data: IKeeping) => {
    deleteKeeping(data);
  };

  return (
    <div>
      <KeepingForm
        data={keeping}
        handle={handleSubmit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default EditKeeping;
