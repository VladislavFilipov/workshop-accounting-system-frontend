import { COMPLETE, WAITING, WORKING, INACTIVE } from "@src/const/statuses";
import { TDetailInCraft } from "@src/types/detail";
import { ILocation } from "@src/types/location";

const detailCraftStatuses = [INACTIVE, WAITING, WORKING, COMPLETE] as const;
export type TDetailCraftStatus = typeof detailCraftStatuses[number];

export interface IDetailCraft {
  id: number;
  stage_number: number;
  status: TDetailCraftStatus;
  stage_id: {
    id: number;
    name: string;
    description: string;
    enterprise_id: number;
  };
  details_id: TDetailInCraft;
  location_id: ILocation;
  create_date: string;
  ending_date: null | string;
}
