import request from "../request";

import { GET, PATCH } from "@src/const/httpMethods";
import { IDetailCraft, TDetailCraftStatus } from "@src/types/detailCraft";

const url = "/details/craft";
const detailsCraft = {
  getByToken: async (token: string) =>
    request<IDetailCraft>({
      method: GET,
      url: `${url}/token?data=${token}`,
    }),
  getByDetailId: async (detailId: number) =>
    request<IDetailCraft[]>({
      method: GET,
      url: `${url}/all/by-details?id=${detailId}`,
    }),

  update: async (
    updateData: {
      status: TDetailCraftStatus;
      location_id?: number;
    },
    id: number,
  ) =>
    request<boolean>({
      method: PATCH,
      url: `${url}/detail?id=${id}`,
      data: updateData,
    }),
};

export default detailsCraft;
