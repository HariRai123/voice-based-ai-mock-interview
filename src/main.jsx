import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router"

import "@/src/styles/global.css"

import RootLayout from "./(root)/Layout"
import AuthLayout from "./(auth)/Layout"
import App from "./App"

import Signup from "./(auth)/sign-up/Signup"
import Signin from "./(auth)/sign-in/Signin"

import Dashboard from "./pages/Dashboard/Dashboard"
import Overview from "./pages/Dashboard/Overview"
import InterviewUi from "./pages/interview/InterviewUi"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },

      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          {
            path: "signin",
            element: <Signin />,
          },
          {
            path: "signup",
            element: <Signup />,
          },
        ],
      },
      {
        path:'interview-generation',
        element:<InterviewUi/>
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <Overview />,
          },
        ],
      },
    ],
  },
])

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)
