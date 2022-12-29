import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

import Addtask from "../Pages/Addtask/Addtask";

import Completedtask from "../Pages/Completedtask/Completedtask";

import Home from "../Pages/Home/Home/Home";


import Mytask from "../Pages/Mytask/Mytask";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addtask',
                element: <Addtask></Addtask>
            },
            {
                path: '/mytask',
                element: <Mytask></Mytask>
            },
            {
                path: '/completedtask',
                element: <Completedtask></Completedtask>
            }

        ]
    }
])

export default router;