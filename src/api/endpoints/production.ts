import request from "../request";

import { GET } from "@src/const/httpMethods";
import { IWorkplace } from "@src/types/workplace";

const url = "/packaging"; // TODO tmp
const production = {
  getAll: async () =>
    request<IWorkplace[]>({
      method: GET,
      url: `${url}`,
    }),
};

export default production;
