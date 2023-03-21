import request from "../request";

import { GET, PATCH } from "@src/const/httpMethods";
import { IDetail, TDetailStatus } from "@src/types/detail";

const baseUrl = "/details";
const details = {
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
};

export default details;
