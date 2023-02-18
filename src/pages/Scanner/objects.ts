import { TDetailStatus } from "@src/types/detail";
import { TDetailCraftStatus } from "@src/types/detailCraft";

export const detailCraftStatuses: {
  [key: string]: {
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

export const detailStatuses: {
  [key: string]: { name: string };
} = {
  INACTIVE: { name: "Неактивна" },
  WAITING: { name: "Ожидание" },
  ASSEMBLY: { name: "В производстве" },
  DEFECT: { name: "Дефект" },
  COMPLETE: { name: "Завершена" },
};
