import { COMPLETE, WAITING, WORKING } from "@src/const/statuses";
import { TDetailCraftStatus } from "@src/types/detailCraft";

interface IStatusBody {
  next: TDetailCraftStatus | null;
  name: string;
  buttonText: string;
}

const detailCraftStatuses: Record<TDetailCraftStatus, IStatusBody> = {
  INACTIVE: { next: WAITING, name: "Неактивно", buttonText: "В ожидание" },
  WAITING: { next: WORKING, name: "Ожидание", buttonText: "Начать работу" },
  WORKING: {
    next: COMPLETE,
    name: "В производстве",
    buttonText: "Завершить",
  },
  COMPLETE: { next: null, name: "Завершено", buttonText: "" },
};

export default detailCraftStatuses;
