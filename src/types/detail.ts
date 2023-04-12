import {
  ASSEMBLY,
  COMPLETE,
  DEFECT,
  INACTIVE,
  WAITING,
} from "@src/const/statuses";
import { ILocation } from "@src/types/location";
import { IUser } from "@src/types/user";

const detailStatuses = [INACTIVE, WAITING, COMPLETE, ASSEMBLY, DEFECT] as const;
export type TDetailStatus = typeof detailStatuses[number];

export interface IDetail {
  id: number;
  name: string;
  description: string;
  tech_number: string;
  amount: number;
  status: TDetailStatus;
  user: IUser;
  location: ILocation;
  files: any;
  items: any;
  stamps: any;
  enterprise_id: number;
}

export type TDetailInCraft = Pick<
  IDetail,
  | "id"
  | "name"
  | "description"
  | "amount"
  | "tech_number"
  | "status"
  | "enterprise_id"
>;
