import request from "../request";

import { GET } from "@src/const/httpMethods";
import { IMachine } from "@src/types/machine";

const url = "/workstation/machine"; // TODO tmp
const production = {
  getAll: async () =>
    request<IMachine[]>({
      method: GET,
      url: `${url}/`,
    }),
};

export default production;
