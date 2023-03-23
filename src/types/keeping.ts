import { IDetail } from "@src/types/detail";

export interface IKeeping {
  id: number;
  detail: IDetail;
  detailAmount: number;
  keepingBox: string;
  keepingBoxAmount: number;
}
