export interface IGoodsItem {
  id: number;
  name: string;
  description: string;
  enterprise_id: number;
  barcode: string;
  vendor_code: string;
  goods_type_id: {
    id: number;
    name: string;
    description: string;
  };
}
