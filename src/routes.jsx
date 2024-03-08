import { Navigate, createBrowserRouter } from "react-router-dom";
import App from './App.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate replace to="/business-card-generator" />,
    },
    {
        path: "/business-card-generator",
        element: <App />,
    }
]);

export default router;