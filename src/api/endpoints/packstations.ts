import request from "../request";

import { GET, POST } from "@src/const/httpMethods";
import { IAddPackstationScan, IPackstation } from "@src/types/packstation";

const url = "/workstation/packstation";
const packaging = {
  getAll: async () =>
    request<IPackstation[]>({
      method: GET,
      url: `${url}/`,
    }),
  addScan: async (data: IAddPackstationScan) =>
    request({
      method: POST,
      url: `${url}/scan/`,
      data,
    }),
};

export default packaging;
