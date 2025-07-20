import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";

function AppContent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
// Create router instance
const router = createBrowserRouter([
  {
    path: "*/**",
    element: <AppContent />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
