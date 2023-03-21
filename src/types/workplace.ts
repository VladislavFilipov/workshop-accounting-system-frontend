import { INACTIVE, WAITING, COMPLETE, ASSEMBLY } from "@src/const/statuses";

const statuses = [INACTIVE, WAITING, COMPLETE, ASSEMBLY];

export type TWorkplaceStatus = typeof statuses[number];

export interface IWorkplace {
  id: number;
  name: string;
  status: TWorkplaceStatus;
  amountCurrent: number;
  amountTotal: number;
}
