import users from "./users";
import { setupServer } from "msw/node";

export const mswServer = setupServer(...users);
