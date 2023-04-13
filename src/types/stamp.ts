import { IDetail } from "@src/types/detail";

export interface IStamp {
  name: string;
  description: string;
  id: number;
  deleted: boolean;
  enterprise_id: number;
  update_date: string | null;
  tech_number: string;
  drawing_developer: string;
  model_developer: string;
  status: string; // TODO STATUS
  create_date: string;
  details: IDetail[];
}
