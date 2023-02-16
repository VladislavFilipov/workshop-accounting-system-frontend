import { IDetail } from "@src/types/detail";

export interface IItem {
  id: number;
  name: string;
  description: string;
  token: string;
  weight: number;
  location_id: null | number;
  details: IDetail[];
}
