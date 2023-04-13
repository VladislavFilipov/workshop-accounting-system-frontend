import request from "../request";

import { GET } from "@src/const/httpMethods";
import { IStamp } from "@src/types/stamp";

const baseUrl = "/stamps";
const stamps = {
  getByEnterpriceId: async (enterpriceId: string) =>
    request<IStamp>({
      method: GET,
      url: `${baseUrl}/enterprise?id=${enterpriceId}`,
    }),
};

export default stamps;
