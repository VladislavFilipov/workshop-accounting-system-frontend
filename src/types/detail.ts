import { IUser } from "@src/types/user";

export type TDetailStatus =
  | "INACTIVE"
  | "WAITING"
  | "WAITING"
  | "COMPLETE"
  | "ASSEMBLY"
  | "DEFECT";

export interface IDetail {
  id: number;
  name: string;
  description: string;
  tech_number: string;
  amount: number;
  status: TDetailStatus;
  user: IUser;
  location: {
    id: number;
    description: string;
    address: string;
    locationName: string;
    mailIndex: string;
  };
  token: string;
  files: any;
  items: any;
  stamps: any;
}
