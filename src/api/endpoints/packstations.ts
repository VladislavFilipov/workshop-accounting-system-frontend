import request from "../request";

import { GET, POST } from "@src/const/httpMethods";
import { IAddPackstationScan } from "@src/types/packstation";
import { IWorkstation } from "@src/types/workstation";

const url = "/workstation/packstation";
const packaging = {
  getAll: async () =>
    request<IWorkstation[]>({
      method: GET,
      url: `${url}/`,
    }),
  addScan: async (data: IAddPackstationScan) =>
    request({
      method: POST,
      url: `${url}/`,
      data,
    }),
};

export default packaging;
