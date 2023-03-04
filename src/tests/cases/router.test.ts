import "@testing-library/jest-dom";
import {
  act,
  fireEvent,
  renderHook,
  RenderResult,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import useAuthStore from "@src/store/auth";
import { renderApp } from "@src/tests/_helpers/renders";
import { IUser } from "@src/types/user";

const MENU_TITLE = "МЕНЮ";

describe("Router tests", () => {
  let rendered: RenderResult | null = null;

  afterEach(() => {
    rendered = null;
  });

  it("main route, not authorized", () => {
    act(() => {
      rendered = renderApp(["/"]);
    });

    const menuTitle = rendered?.queryByText(MENU_TITLE);
    expect(menuTitle).not.toBeInTheDocument();
  });

  it("main route, authorized", () => {
    const { result } = renderHook(() => useAuthStore());

    act(() => {
      result.current.login({} as IUser);
      rendered = renderApp(["/"]);
    });

    expect(result.current.isAuthorized).toBe(true);

    const menuTitle = rendered?.queryByText(MENU_TITLE);
    expect(menuTitle).toBeInTheDocument();
  });

  it("main route -> scanner", async () => {
    const { result } = renderHook(() => useAuthStore());
    const user = userEvent.setup();

    act(() => {
      result.current.login({} as IUser);
      rendered = renderApp(["/"]);
    });

    const linkButton = rendered?.queryByText("Учёт производимых работ");
    expect(linkButton).toBeInTheDocument();

    if (linkButton) {
      await user.click(linkButton);

      const scannerTitle = rendered?.queryByText("УЧЕТ РАБОТ");
      expect(scannerTitle).toBeInTheDocument();
    }
  });
});
