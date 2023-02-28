import { IDetail, TDetailStatus } from "@src/types/detail";
import { IDetailCraft } from "@src/types/detailCraft";

export type IUpdateDetailStatus = (options: {
  detailCraft: IDetailCraft;
  status: TDetailStatus;
}) => Promise<IDetail>;
