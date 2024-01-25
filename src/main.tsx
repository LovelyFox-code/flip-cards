import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'
import {Root} from "./routes/Root.tsx";
import {Cards} from "./components/Cards/Cards.tsx";
import {Quiz} from "./components/Quiz/Quiz.tsx";

const router = createBrowserRouter(([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "cards",
                element: <Cards/>
            },
            {
                path: "quiz",
                element: <Quiz/>
            }
        ]
    },

]))
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
        {/*<App/>*/}
    </React.StrictMode>,
)
