import RootLayout from "./pages/Root";
import Drivers from "./pages/Drivers";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Connections from "./pages/Connections";
import Driverdetail from "./pages/Driverdetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "drivers",
          element: <Drivers />,
        },
        { path: "connections", element: <Connections /> },
        { path: "driver", element: <Driverdetail /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
