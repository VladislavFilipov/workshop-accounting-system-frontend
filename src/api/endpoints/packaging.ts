import request from "../request";

import { GET } from "@src/const/httpMethods";
import { IWorkplace } from "@src/types/workplace";

const url = "/packaging";
const packaging = {
  getAll: async () =>
    request<IWorkplace[]>({
      method: GET,
      url: `${url}`,
    }),
};

export default packaging;
