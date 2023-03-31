import "@testing-library/jest-dom";
import { act, renderHook } from "@testing-library/react";

import useScannerData from "@src/store/scanner";
import { beforeAfterSetup } from "@src/tests/_helpers/beforeAfterSetup";

describe("AccountingProduction input parsing and navigation", () => {
  const { rendered, events, router } = beforeAfterSetup({
    routerOptions: { initialEntries: ["/accounting/production"] },
  });

  let inputField: HTMLElement | undefined;
  let getDataButton: HTMLElement | undefined;

  beforeEach(async () => {
    inputField = await rendered()?.findByRole("textbox");
    getDataButton = await rendered()?.findByText("Получить данные");

    expect(inputField).toBeInTheDocument();
    expect(getDataButton).toBeInTheDocument();
  });

  afterEach(() => {
    const { result } = renderHook(() => useScannerData());

    act(() => {
      result.current.reset();
    });
  });

  it("scanned value includes 'items'", async () => {
    if (inputField && getDataButton) {
      await events.type(inputField, "item\n22");
      await events.click(getDataButton);

      expect(router()?.state.location.pathname).toEqual(
        "/accounting/production/items",
      );

      const header = await rendered()?.findByText(/Получены данные/i);
      expect(header).toBeInTheDocument();
    }
  });

  it("scanned value includes 'stamps'", async () => {
    if (inputField && getDataButton) {
      await events.type(inputField, "stamp\n22");
      await events.click(getDataButton);

      expect(router()?.state.location.pathname).toEqual(
        "/accounting/production/stamps",
      );

      const header = await rendered()?.findByText(/Этапы производства/i);
      expect(header).toBeInTheDocument();
    }
  });
});
