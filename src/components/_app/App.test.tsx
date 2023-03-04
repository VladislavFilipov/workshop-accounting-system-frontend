import "@testing-library/jest-dom";
import { act } from "@testing-library/react";

import { renderApp } from "@src/tests/_helpers/renders";

describe("App", () => {
  let container: HTMLElement | null = null;

  afterEach(() => {
    container = null;
  });

  it("base render", () => {
    act(() => {
      container = renderApp().container;
    });

    const appComponent = container?.getElementsByClassName("App")[0];

    expect(appComponent).toBeInTheDocument();
  });
});
