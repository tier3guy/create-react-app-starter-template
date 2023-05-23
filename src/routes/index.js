import { Home, ErrorPage } from "../pages";

const routes = [
  {
    key: "1",
    exact: true,
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    key: "404",
    path: "*",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
