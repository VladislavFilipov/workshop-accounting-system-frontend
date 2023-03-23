import { INACTIVE, WAITING, COMPLETE, ASSEMBLY } from "@src/const/statuses";

const statuses = [INACTIVE, WAITING, COMPLETE, ASSEMBLY];

export type TWorkstationStatus = typeof statuses[number];

export interface IWorkstation {
  id: number;
  name: string;
  status: TWorkstationStatus;
  amountCurrent: number;
  amountTotal: number;
}
