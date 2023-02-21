import { TDetailStatus } from "@src/types/detail";

const detailStatuses: {
  [key in TDetailStatus]: { name: string };
} = {
  INACTIVE: { name: "Неактивна" },
  WAITING: { name: "Ожидание" },
  ASSEMBLY: { name: "В производстве" },
  DEFECT: { name: "Дефект" },
  COMPLETE: { name: "Завершена" },
};

export default detailStatuses;
