import "@testing-library/jest-dom";

import { beforeAfterSetup } from "@src/tests/_helpers/beforeAfterSetup";
import { usersList } from "@src/tests/_mswListeners/_data";
import { IUser } from "@src/types/user";
import { formatUserName } from "@src/utils/userFunctions";

describe("Auth", () => {
  const { rendered, router, events } = beforeAfterSetup({
    routerOptions: { initialEntries: ["/login"] },
    withAuth: false,
  });

  it("select user from list", async () => {
    const firstUser: IUser = usersList[0];

    const firstUserName = await rendered()?.findByText(
      formatUserName(firstUser, false),
    );
    expect(firstUserName).toBeInTheDocument();

    if (firstUserName) {
      await events.click(firstUserName);
      expect(router()?.state.location.pathname).toEqual("/");
    }
  });
});
