import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../../pages/home";

const router = createBrowserRouter([
    {
        path: '/',
       element: <Home />
    },
]);

export function AppRoutes() {
    return <RouterProvider router={router} />
}