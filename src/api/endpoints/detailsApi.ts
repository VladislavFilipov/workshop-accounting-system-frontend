import { GET, PATCH } from "@src/const/httpMethods";
import { IDetail, TDetailStatus } from "@src/types/detail";

import request from "../request";

const baseUrl = "/details";
const detailsApi = {
  getByToken: async (token: string) =>
    request<IDetail>({
      method: GET,
      url: `${baseUrl}/token?data=${token}`,
    }),
  updateDetailStatus: async (detail: { status: TDetailStatus }, id: number) =>
    request<IDetail>({
      method: PATCH,
      url: `${baseUrl}/detail?id=${id}`,
      data: detail,
    }),
  // .then((res) => {
  //   console.log("getAll", res);
  //   return res.filter((item) => item.id > 0);
  // })
};

export default detailsApi;
