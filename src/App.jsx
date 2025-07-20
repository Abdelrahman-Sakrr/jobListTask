import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";

function App() {
  let routing = createHashRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return <RouterProvider router={routing}></RouterProvider>;
}

export default App;
