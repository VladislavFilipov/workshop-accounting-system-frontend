import { rest } from "msw";

import { baseURL } from "@src/api/request";
import { usersList } from "@src/tests/_mswListeners/_data";

const getUsers = rest.get(`${baseURL}/users`, (req, res, ctx) =>
  res(ctx.status(200), ctx.json(usersList)),
);

export default [getUsers];
