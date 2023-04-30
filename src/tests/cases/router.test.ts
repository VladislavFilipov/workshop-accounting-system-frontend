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
    const menuTitle = rendered()?.queryByTestId(MENU_TITLE);
    expect(menuTitle).not.toBeInTheDocument();
  });

  it("main route, authorized", async () => {
    const { result: authStore } = renderHook(() => useAuthStore());

    act(() => {
      authStore.current.login(user);
    });
    expect(authStore.current.isAuthorized).toBe(true);

    const menuTitle = await rendered()?.findByTestId(MENU_TITLE);
    expect(menuTitle).toBeInTheDocument();
  });

  it("main route -> scanner", async () => {
    const { result } = renderHook(() => useAuthStore());

    act(() => {
      result.current.login(user);
    });

    const linkButton = await rendered()?.findByText("Работы");
    expect(linkButton).toBeInTheDocument();

    if (linkButton) {
      await events.click(linkButton);
      const scannerTitle = await rendered()?.findByTestId("Учёт работ");
      expect(scannerTitle).toBeInTheDocument();
    }
  });
});
