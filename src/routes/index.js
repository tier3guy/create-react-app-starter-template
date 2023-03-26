import { Home, ErrorPage } from "../pages";

const routes = [
  {
    key: "1",
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
