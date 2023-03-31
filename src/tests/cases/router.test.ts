import "@testing-library/jest-dom";
import { act, renderHook } from "@testing-library/react";

import useAuthStore from "@src/store/auth";
import { beforeAfterSetup } from "@src/tests/_helpers/beforeAfterSetup";
import { usersList } from "@src/tests/_mswListeners/_data";

const MENU_TITLE = "Меню";
const user = usersList[0];
describe("Router tests", () => {
  const { rendered, events } = beforeAfterSetup({
    withAuth: false,
  });

  it("main route, not authorized", () => {
    const menuTitle = rendered()?.queryByText(MENU_TITLE);
    expect(menuTitle).not.toBeInTheDocument();
  });

  it("main route, authorized", async () => {
    const { result } = renderHook(() => useAuthStore());

    act(() => {
      result.current.login(user);
    });
    expect(result.current.isAuthorized).toBe(true);

    const menuTitle = await rendered()?.findByText(MENU_TITLE);
    expect(menuTitle).toBeInTheDocument();
  });

  it("main route -> scanner", async () => {
    const { result } = renderHook(() => useAuthStore());

    act(() => {
      result.current.login(user);
    });

    const linkButton = await rendered()?.findByText("Учёт производимых работ");
    expect(linkButton).toBeInTheDocument();

    if (linkButton) {
      await events.click(linkButton);
      rendered()?.debug();
      const scannerTitle = await rendered()?.findByText("Учёт работ");
      expect(scannerTitle).toBeInTheDocument();
    }
  });
});
