import { GET, PATCH } from "@src/const/httpMethods";
import { IDetailCraft, TDetailCraftStatus } from "@src/types/detailCraft";
import { IUser } from "@src/types/user";

import request from "../request";

const url = "/details/craft";
const detailsCraftApi = {
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
      // stage_number: 2,
      status: TDetailCraftStatus;
      // stage_id: 1,
      // details_id: number;
      location_id?: number;
    },
    id: number,
  ) =>
    request<boolean>({
      method: PATCH,
      url: `${url}/detail?id=${id}`,
      data: updateData,
    }),
  // .then((res) => {
  //   console.log("getAll", res);
  //   return res.filter((item) => item.id > 0);
  // })
};

export default detailsCraftApi;
