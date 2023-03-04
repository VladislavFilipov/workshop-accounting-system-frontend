import { TDetailCraftStatus } from "@src/types/detailCraft";

const detailCraftStatuses: {
  [key in TDetailCraftStatus]: {
    next: TDetailCraftStatus | null;
    name: string;
    buttonText: string;
  };
} = {
  WAITING: { next: "WORKING", name: "Ожидание", buttonText: "Начать работу" },
  WORKING: {
    next: "COMPLETE",
    name: "В производстве",
    buttonText: "Завершить",
  },
  COMPLETE: { next: null, name: "Завершено", buttonText: "" },
};

export default detailCraftStatuses;
