import { ASSEMBLY, COMPLETE, INACTIVE, WAITING } from "@src/const/statuses";
import { TWorkplaceStatus } from "@src/types/workplace";

const workplaceStatuses: {
  [key in TWorkplaceStatus]: { name: TWorkplaceStatus; ruName: string };
} = {
  INACTIVE: { name: INACTIVE, ruName: "Неактивно" },
  WAITING: { name: WAITING, ruName: "Ожидание" },
  ASSEMBLY: { name: ASSEMBLY, ruName: "В работе" },
  COMPLETE: { name: COMPLETE, ruName: "Завершено" },
} as const;

export default workplaceStatuses;
