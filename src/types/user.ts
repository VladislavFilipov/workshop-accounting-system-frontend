import { IJob } from "@src/types/job";

export interface IUser {
  id: number | undefined;
  lastName: string;
  name: string;
  middleName: string;
  role: string;
  jobs: IJob[];
}

export type IUserNoId = Omit<IUser, "id">;
