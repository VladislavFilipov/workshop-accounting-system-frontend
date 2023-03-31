import { rest } from "msw";

import { baseURL } from "@src/api/request";
import { detailCraft } from "@src/tests/_mswListeners/_data";

const getDetailCraft = rest.get(
  `${baseURL}/details/craft/detail`,
  (req, res, ctx) => {
    // const productId = req.url.searchParams.get('id')
    return res(ctx.status(200), ctx.json(detailCraft));
  },
);

export default [getDetailCraft];
