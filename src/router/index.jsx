import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import CoursesOpenPage from "../pages/CoursesOpenPage";
import AboutUsPage from "../pages/AboutUsPage";
import PricingPage from "../pages/PricingPage";
import ContactPage from "../pages/ContactPage";
import SignUp from "../pages/SignUp";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import GamesPage from "../pages/GamesPage";
import IDCardGenerator from "../pages/UserCard";
import MapsPage from "../pages/MapsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
    path: "coursesopenpage",
    element: <CoursesOpenPage />
  },
      {
        path: "about",
        element: <AboutUsPage />,
      },
      {
        path: "pricing",
        element: <PricingPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "usercard",
        element: <IDCardGenerator />
      },
      {
        path: "map",
        element: <MapsPage />
      }
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
