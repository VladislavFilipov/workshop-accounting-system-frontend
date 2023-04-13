import { ACTIVE, DELETED, NOT_ACTIVE } from "@src/const/useStatuses";
import { ADMIN, MODERATOR, USER } from "@src/const/userRoles";
import { IJob } from "@src/types/job";

const userStatuses = [ACTIVE, NOT_ACTIVE, DELETED] as const;
export type TUserStatus = typeof userStatuses[number];

const userRoles = [ADMIN, MODERATOR, USER] as const;
export type TUserRole = typeof userRoles[number];

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
