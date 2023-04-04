import { SLEEP, WORK, REPAIR } from "@src/const/statuses";
import { TWorkstationStatus } from "@src/types/workstation";

interface IStatusBody {
  name: TWorkstationStatus;
  ruName: string;
}

const workstationStatuses: Record<TWorkstationStatus, IStatusBody> = {
  WORK: { name: WORK, ruName: "В работе" },
  REPAIR: { name: REPAIR, ruName: "Ремонт" },
  SLEEP: { name: SLEEP, ruName: "Неактивно" },
} as const;

export default workstationStatuses;
