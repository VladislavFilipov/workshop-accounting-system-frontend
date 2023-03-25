import request from "../request";

import { GET, POST } from "@src/const/httpMethods";
import {
  IAddPackstationScan,
  IPackstation,
  IPackstationScan,
} from "@src/types/packstation";

const url = "/workstation/packstation";
const packaging = {
  getAll: async () =>
    request<IPackstation[]>({
      method: GET,
      url: `${url}/`,
    }),
  getById: async (id: string | number) =>
    request<IPackstation>({
      method: GET,
      url: `${url}/base?id=${id}`,
    }),
  addScan: async (data: IAddPackstationScan) =>
    request({
      method: POST,
      url: `${url}/scan/`,
      data,
    }),
  getScansByPackstation: async (id: string | number) =>
    request<IPackstationScan[]>({
      method: GET,
      url: `${url}/scan/all/by-packstation?id=${id}`,
    }),
};

export default packaging;
