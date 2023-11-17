import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout"
import Binarygame from "./pages/Binarygame"
import Home from "./pages/Home"


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout>
      <Home/>
    </MainLayout>
  },
  {
    path: "binary-game",
    element: <MainLayout>
      <Binarygame/>
    </MainLayout>,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
