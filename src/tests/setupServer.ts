import { mswServer } from "@src/tests/_mswListeners/_server";

beforeAll(() => {
  mswServer.listen();
});

afterEach(() => {
  mswServer.resetHandlers();
});

afterAll(() => mswServer.close());
