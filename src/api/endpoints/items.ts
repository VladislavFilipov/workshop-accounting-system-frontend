import request from "../request";

import { GET } from "@src/const/httpMethods";
import { IItem } from "@src/types/item";

const baseUrl = "/items";
const items = {
  getById: async (id: number) =>
    request<IItem>({
      method: GET,
      url: `${baseUrl}/item?id=${id}`,
    }),
};

export default items;
