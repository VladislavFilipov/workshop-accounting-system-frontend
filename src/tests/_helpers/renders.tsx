import { ReactNode } from "react";
import { createMemoryRouter, RouterProviderProps } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, RenderResult } from "@testing-library/react";

import App from "@src/components/_app/App";
import { routes, TRouter } from "@src/pages/router";

// import {Router} from '@remix-run/router/dist';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

export const renderWithQueryProvider = (children: ReactNode) =>
  render(
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>,
  );

export const renderApp = (initialEntries?: string[]): RenderResult => {
  const options = initialEntries ? { initialEntries } : {};
  const router = createMemoryRouter(routes, options);

  return render(
    <QueryClientProvider client={queryClient}>
      <App router={router} />
    </QueryClientProvider>,
  );
};

export interface IRouterOprions {
  initialEntries?: string[];
  initialIndex?: number;
}

export const renderAppWithRouter = (
  options?: IRouterOprions,
): {
  rendered: RenderResult;
  router: TRouter;
} => {
  // const options = options ? { options } : {};
  const router = createMemoryRouter(routes, options ?? {});

  return {
    rendered: render(
      <QueryClientProvider client={queryClient}>
        <App router={router} />
      </QueryClientProvider>,
    ),
    router,
  };
};
