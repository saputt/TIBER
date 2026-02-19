import { createBrowserRouter, Outlet } from "react-router-dom";
import LandingPage from "../pages/Landing";
import ActivityPage from "../pages/Activity";
import ProgressPage from "../pages/Progress";
import DashboardPage from "../pages/Dashboard";
import NotFoundPage from "../pages/404";
import RegisterPage from "../pages/Auth/Register";
import LoginPage from "../pages/Auth/Login";
import OnboardingPage from "../pages/Onboarding";
import AppLayout from "../components/templates/AppLayout";
import AboutPage from "../pages/About";
import InfoUserPage from "../pages/InfoUser/InfoUser";
import HowPage from "../pages/How";
import ProfileSettingPage from "../pages/Profile/Setting";
import ProfilePage from "../pages/Profile/Profile";
import ScrollToTop from "../utils/ScrollToTop";
import { AuthGuard, GuestGuard } from "./RouteGuard";

const router = createBrowserRouter([
  {
    element: (
      <>
        <ScrollToTop />
        <Outlet />
      </>
    ),
    children: [
      {
        element: <GuestGuard />,
        children: [
          {
            path: "/login",
            element: <LoginPage />,
          },
          {
            path: "/register",
            element: <RegisterPage />,
          },
          //onboarding (personalization)
          {
            path: "/onboarding",
            element: <OnboardingPage />,
          },
        ],
      },

      {
        path: "/",
        element: <AppLayout />,
        children: [
          //landing page
          {
            element: <GuestGuard />,
            children: [
              {
                path: "/",
                element: <LandingPage />,
              },
            ],
          },
          {
            element: <AuthGuard />,
            children: [
              //activity page
              {
                path: "/activity",
                element: <ActivityPage />,
              },

              //progress page
              {
                path: "/progress",
                element: <ProgressPage />,
              },

              //profile page
              {
                path: "/profile",
                element: <ProfilePage />,
              },

              //profile page
              {
                path: "/profile/settings",
                element: <ProfileSettingPage />,
              },

              //home page (dashboard)
              {
                path: "/dashboard",
                element: <DashboardPage />,
              },
            ],
          },

          {
            path: "/about",
            element: <AboutPage />,
          },
          {
            path: "/hows-it-work",
            element: <HowPage />,
          },
          {
            path: "/information-user",
            element: <InfoUserPage />,
          },
        ],
      },

      //404 page
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
