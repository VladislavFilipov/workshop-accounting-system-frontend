import { TDetailStatus } from "@src/types/detail";

export interface IActiveWork {
  id: number;
  token: string;
  date: string;
  draftNumber: string;
  stage: string;
  status: TDetailStatus;
}
