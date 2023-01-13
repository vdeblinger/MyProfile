import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import { createRoot } from "react-dom/client"
import ErrorPage from "./Components/Errorpage";
import Homepage from "./Components/Homepage";
import IndexForHomePage from "./Components/Indexhomepage";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Hobbies from "./Components/Hobbies";
import Skills from "./Components/Skills";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <IndexForHomePage />
            },
            {
                path: "/aboutme",
                element: <AboutMe />
            },
            {
                path: "/projects",
                element: <Projects />
            },
            {
                path: "/hobbies",
                element: <Hobbies />
            },
            {
                path: "/skills",
                element: <Skills />
            }
        ]
    }
])


const app = document.getElementById("apps")
const root = createRoot(app)
root.render(<RouterProvider router={router} />)