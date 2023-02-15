import { FC } from "react";
import { RouterProvider } from "react-router-dom";

import router from "@src/pages/router";

const App: FC = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
