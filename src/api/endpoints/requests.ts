import request from "../request";

import { GET } from "@src/const/httpMethods";
import { IRequest } from "@src/types/request";

const url = "/crm/requests/crm";
const requests = {
  getAll: async () =>
    request<IRequest[]>({
      method: GET,
      url: `${url}/`,
    }),
};

export default requests;
