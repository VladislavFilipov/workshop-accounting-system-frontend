import { IDetail } from "@src/types/detail";

export type TDetailCraftStatus = "WAITING" | "WORKING" | "COMPLETE";

export interface IDetailCraft {
  id: number;
  stage_number: number;
  status: TDetailCraftStatus;
  stage_id: {
    id: number;
    name: string;
    description: string;
  };
  details_id: IDetail;
  location_id: {
    id: 6;
    description: string;
    address: string;
    locationName: string;
    mailIndex: string;
  };
  create_date: string;
  ending_date: null | string;
  token: string;
}
