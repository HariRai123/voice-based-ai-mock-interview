import App from "../App";

// Pages
import LoginPage from "../pages/SignIn/LoginPage";
import Signup from "../(auth)/sign-up/Signup";

// Dashboard
import Dashboard from "../pages/Dashboard/Dashboard";
import Overview from "../pages/Dashboard/Overview";
import Analytics from "../pages/Dashboard/Analytics";
import HelpSupport from "../pages/Dashboard/HelpSupport";
import Resumeoptimizer from "../pages/Dashboard/Resumeoptimizer";
import Settings from "../pages/Dashboard/Settings";
import History from "../pages/Dashboard/History";

const AppRoutes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          { index: true, element: <Overview /> },
          { path: "analytics", element: <Analytics /> },
          { path: "help-support", element: <HelpSupport /> },
          { path: "resumeoptimizer", element: <Resumeoptimizer /> },
          { path: "settings", element: <Settings /> },
          { path: "history", element: <History /> },
        ],
      },
    ],
  },
];

export default AppRoutes;
