import { FC } from "react";
import { RouterProvider } from "react-router-dom";

import { TRouter } from "@src/pages/router";

const App: FC<{ router: TRouter }> = ({ router }) => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
