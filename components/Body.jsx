import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Homepage from "./Homepage";

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/home',
            element: <Homepage />
        },
    ]);
    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    );
};

export default Body;