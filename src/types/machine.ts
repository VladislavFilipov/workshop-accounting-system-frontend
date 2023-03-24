import { REPAIR, SLEEP, WORK } from "@src/const/statuses";

const statuses = [WORK, REPAIR, SLEEP] as const;

export type TMachineStatus = typeof statuses[number];

export interface IMachine {
  id: number;
  name: string;
  description: string;
  enterprise_id: number;
  count: number;
  status: TMachineStatus;
}
