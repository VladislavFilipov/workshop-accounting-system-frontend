import { SLEEP, COMPLETE, WORK, REPAIR } from "@src/const/statuses";
import { TWorkstationStatus } from "@src/types/workstation";

const workstationStatuses: {
  [key in TWorkstationStatus]: { name: TWorkstationStatus; ruName: string };
} = {
  WORK: { name: WORK, ruName: "В работе" },
  REPAIR: { name: REPAIR, ruName: "Ремонт" },
  SLEEP: { name: SLEEP, ruName: "Неактивно" },
} as const;

export default workstationStatuses;

// "WORK" | "REPAIR" | "SLEEP"
