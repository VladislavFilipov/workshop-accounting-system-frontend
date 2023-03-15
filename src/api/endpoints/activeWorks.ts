import request from "../request";

import { GET } from "@src/const/httpMethods";
import { IActiveWork } from "@src/types/activeWorks";

const baseUrl = "/activeWorks";
const activeWorks = {
  getByUser: async (id: number) =>
    request<IActiveWork[]>({
      method: GET,
      url: `${baseUrl}`,
    }),
};

export default activeWorks;
