import "@testing-library/jest-dom";
import { act, RenderResult, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderApp } from "@src/tests/_helpers/renders";
import { usersList } from "@src/tests/_mswListeners/_data";
import { mswServer } from "@src/tests/_mswListeners/_server";
import { IUser } from "@src/types/user";
import { formatUserName } from "@src/utils/userFunctions";

describe("Auth", () => {
  let rendered: RenderResult | null = null;
  const user = userEvent.setup();

  beforeEach(() => mswServer.listen());
  afterEach(() => {
    mswServer.resetHandlers();
    rendered = null;
  });
  afterAll(() => mswServer.close());

  it("select user from list", async () => {
    act(() => {
      rendered = renderApp(["/login"]);
    });

    const firstUser: IUser = usersList[0];

    let firstUserName = undefined;
    await waitFor(async () => {
      firstUserName = rendered?.queryByText(formatUserName(firstUser, true));
      expect(firstUserName).toBeInTheDocument();
    });

    if (firstUserName) user.click(firstUserName);

    await waitFor(async () => {
      expect(location.pathname).toEqual("/");
    });
  });
});
