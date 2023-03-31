import { TDetailInCraft } from "@src/types/detail";

export interface IKeeping {
  id: number;
  detail: TDetailInCraft;
  detailAmount: number;
  keepingBox: number | undefined;
  keepingBoxAmount: number;
}
