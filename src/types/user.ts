import { IJob } from "@src/types/job";

// export interface IUser {
//   id: number | undefined;
//   lastName: string;
//   name: string;
//   middleName: string;
//   role: string;
//   jobs: IJob[];
// }

export type TUserStatus = "ACTIVE" | "NOT_ACTIVE" | "DELETED";
export type TUserRole = "ADMIN" | "MODERATOR" | "USER";

export interface IUser {
  id: number;
  username: string;
  password: string;
  note: string;
  enterprise_id: number;
  location_id: null | number;
  status: TUserStatus;
  role: TUserRole;
  first_name: string;
  last_name: string;
  token: string;
  create_date: string;
  jobs_id: IJob[];
}

export type IUserNoId = Omit<IUser, "id">;
