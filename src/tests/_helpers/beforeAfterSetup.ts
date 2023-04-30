import { act, cleanup, renderHook, RenderResult } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserEvent } from "@testing-library/user-event/dist/types/setup/setup";

import { TRouter } from "@src/pages/router";
import useAuthStore from "@src/store/auth";
import {
  IRouterOprions,
  renderAppWithRouter,
} from "@src/tests/_helpers/renders";
import { usersList } from "@src/tests/_mswListeners/_data";
import { IUser, TUserRole } from "@src/types/user";

interface IOptions {
  routerOptions?: IRouterOprions;
  userRole?: TUserRole;
  withAuth?: boolean;
}

interface IReturns {
  rendered: () => RenderResult | null;
  events: UserEvent;
  router: () => TRouter | null;
}

export const beforeAfterSetup = ({
  routerOptions = { initialEntries: ["/"] },
  userRole = "USER",
  withAuth = true,
}: IOptions): IReturns => {
  let rendered: RenderResult | null = null;
  let router: TRouter | null = null;

  const events: UserEvent = userEvent.setup();

  beforeAll(() => {
    if (!withAuth) return;

    const { result } = renderHook(() => useAuthStore());
    const user: IUser =
      usersList.find((user) => user.role === userRole) || usersList[0];
    act(() => {
      result.current.login(user);
    });
  });

  beforeEach(() => {
    act(() => {
      const result = renderAppWithRouter(routerOptions);

      rendered = result.rendered;
      router = result.router;
    });
  });

  afterEach(() => {
    rendered = null;
    router = null;
    cleanup();

    if (!withAuth) {
      const { result } = renderHook(() => useAuthStore());
      act(() => {
        result.current.logout();
      });
    }
  });
  afterAll(() => {
    if (!withAuth) return;

    const { result } = renderHook(() => useAuthStore());
    act(() => {
      result.current.logout();
    });
  });

  return {
    rendered: () => rendered,
    events,
    router: () => router,
  };
};
