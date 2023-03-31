import detailCraft from "./detailCraft";
import detailCraftsList from "./detailCraftsList";
import users from "./users";
import { setupServer } from "msw/node";

export const mswServer = setupServer(
  ...users,
  ...detailCraft,
  ...detailCraftsList,
);
