import { IJob } from "@src/types/job";

// export interface IUser {
//   id: number | undefined;
//   lastName: string;
//   name: string;
//   middleName: string;
//   role: string;
//   jobs: IJob[];
// }

type TUserStatus = "ACTIVE" | "NOT ACTIVE" | "DELETED";

export interface IUser {
  id: number;
  username: string;
  password: string;
  note: string;
  enterprise_id: number;
  location_id: null | number;
  status: TUserStatus;
  role: string;
  first_name: string;
  last_name: string;
  token: string;
  create_date: string;
  jobs_id: IJob[];
}

export type IUserNoId = Omit<IUser, "id">;
