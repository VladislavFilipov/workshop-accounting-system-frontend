import request from "../request";

import { GET } from "@src/const/httpMethods";
import { IUser } from "@src/types/user";

const url = "/users";
const users = {
  getAll: async () =>
    request<IUser[]>({
      method: GET,
      url: `${url}/`,
    }),
};

export default users;
