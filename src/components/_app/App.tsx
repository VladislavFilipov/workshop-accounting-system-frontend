import { FC } from "react";
import { RouterProvider, RouterProviderProps } from "react-router-dom";

const App: FC<{ router: RouterProviderProps["router"] }> = ({ router }) => {
  return (
    <div className="App">
      123
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
