import { WAITING, WORKING } from "@src/const/statuses";

const statuses = [WAITING, WORKING] as const;
export type TRequestStatus = typeof statuses[number];

export interface IRequest {
  id: number;
  name: string;
  description: string;
  enterprise_id: number;
  invoicing_responsible: string;
  client_name: string;
  ltd: string;
  paid: false;
  shippingDate: string;
  create_date: string;
  ending_date: string | null;
  status: TRequestStatus;
  request_goods_list: {
    name: string;
    description: string;
    id: number;
    amount: number;
    status: TRequestStatus;
    retail_pack_weight: number;
    transport_pack_weight: number;
    retail_pack_count: number;
    transport_pack_count: number;
  }[];
}
