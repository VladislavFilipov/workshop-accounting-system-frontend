// import { INACTIVE, WAITING, COMPLETE, ASSEMBLY } from "@src/const/statuses";
import { TMachineStatus } from "@src/types/machine";
import { TPackstationStatus } from "@src/types/packstation";

// const statuses = [INACTIVE, WAITING, COMPLETE, ASSEMBLY];

// export type TWorkstationStatus = typeof statuses[number];

// export interface IWorkstation {
//   id: number;
//   name: string;
//   status: TWorkstationStatus;
//   amountCurrent: number;
//   amountTotal: number;
// }

export type TWorkstationStatus = TPackstationStatus | TMachineStatus;
// export interface IWorkstationProps<Type> {
//   workstation: Type & { name: string; status: TWorkstationStatus };
// }
// export type TWorkstationProps<Type> = Type & {
//   id: number;
//   name: string;
//   status: TWorkstationStatus;
// };

export interface IWorkstationCardProps {
  id: number;
  name: string;
  status: TWorkstationStatus;
}
