import { createBrowserRouter } from "react-router-dom";
import { Loader } from "../components/loader/Loader";
import { HomePage } from "../pages/homePage/homePage";

const pageLoader = () => <Loader />;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    loader: pageLoader,
  },
]);
