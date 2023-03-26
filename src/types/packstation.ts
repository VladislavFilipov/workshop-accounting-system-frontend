import { WORK } from "@src/const/statuses";
import { IGoodsItem } from "@src/types/goodsItem";
import { IRequest } from "@src/types/request";
import { IUser } from "@src/types/user";

const statuses = [WORK] as const;

export type TPackstationStatus = typeof statuses[number];

export interface IPackstation {
  id: number;
  name: string;
  description: string;
  enterprise_id: number;
  pack_count: number;
  status: TPackstationStatus;
  user: IUser;
  crm_requests: IRequest;
  goods: IGoodsItem;
}

export interface IAddPackstationScan {
  token: string;
  packstation_id: number;
  user_id: number;
  crm_requests_id: number;
  goods_id: number;
}

export interface IPackstationScan {
  id: number;
  token: string;
  create_date: string;
  update_date: string;
  packstation: IPackstation;
  user: IUser;
  crm_requests: IRequest;
  goods: IGoodsItem;
}
