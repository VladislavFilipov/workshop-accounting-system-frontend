import request from "../request";

import { GET } from "@src/const/httpMethods";
import { IWorkstation } from "@src/types/workstation";

const url = "/packaging";
const packaging = {
  getAll: async () =>
    request<IWorkstation[]>({
      method: GET,
      url: `${url}`,
    }),
};

export default packaging;
