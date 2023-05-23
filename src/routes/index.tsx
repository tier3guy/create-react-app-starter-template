import { HomePage, ErrorPage } from '../pages';

const routes = [
    {
        key: '1',
        exact: true,
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    {
        key: '404',
        exact: true,
        path: '*',
        element: <ErrorPage />,
        errorElement: <ErrorPage />,
    },
];

export default routes;
