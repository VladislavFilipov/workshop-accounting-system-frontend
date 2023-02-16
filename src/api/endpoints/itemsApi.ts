import { GET } from "@src/const/httpMethods";
import { IItem } from "@src/types/item";

import request from "../request";

const baseUrl = "/items";
const itemsApi = {
  getById: async (id: number) =>
    request<IItem>({
      method: GET,
      url: `${baseUrl}/item?id=${id}`,
    }),
};

export default itemsApi;
