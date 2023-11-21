import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout"
import Binarygame from "./pages/Binarygame"
import Home from "./pages/Home"
import Add4Bit from "./pages/Add4Bit";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout>
      <Home/>
    </MainLayout>
  },
  {
    path: "binary_game",
    element: <MainLayout>
      <Binarygame/>
    </MainLayout>,
  },
  {
    path: "add4bit_game",
    element: <MainLayout>
      <Add4Bit/>
    </MainLayout>,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
