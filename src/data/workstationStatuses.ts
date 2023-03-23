import { ASSEMBLY, COMPLETE, INACTIVE, WAITING } from "@src/const/statuses";
import { TWorkstationStatus } from "@src/types/workstation";

const workplaceStatuses: {
  [key in TWorkstationStatus]: { name: TWorkstationStatus; ruName: string };
} = {
  INACTIVE: { name: INACTIVE, ruName: "Неактивно" },
  WAITING: { name: WAITING, ruName: "Ожидание" },
  ASSEMBLY: { name: ASSEMBLY, ruName: "В работе" },
  COMPLETE: { name: COMPLETE, ruName: "Завершено" },
} as const;

export default workplaceStatuses;
