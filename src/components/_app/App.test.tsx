import "@testing-library/jest-dom";
import { act, screen } from "@testing-library/react";

import App from "@src/components/_app/App";
import { renderApp, renderWithQueryProvider } from "@src/tests/_helpers";

describe("App", () => {
  let container: any;

  // beforeEach(() => {
  //   container = renderWithQueryProvider(<App />);
  // });

  it("render", () => {
    act(() => {
      container = renderApp().container;
    });
    // const { container } = renderApp();
    // console.log("container", container);
    // const appComponent = container.querySelector(".App");
    // console.log("appComponent", appComponent);

    expect(screen.getByText("123")).toBeInTheDocument();
  });
});
