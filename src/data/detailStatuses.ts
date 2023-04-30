import { TDetailStatus } from "@src/types/detail";

interface IStatusBody {
  name: string;
}

const detailStatuses: Record<TDetailStatus, IStatusBody> = {
  INACTIVE: { name: "Неактивна" },
  WAITING: { name: "Ожидание" },
  WORKING: { name: "В производстве" },
  DEFECT: { name: "Дефект" },
  COMPLETE: { name: "Завершена" },
};

export default detailStatuses;
