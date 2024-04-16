import "./App.css";
// import Contact from "./Pages/ContactPage/Contact";
// import Category from "./../src/Components/category";
// import Auth from "./auth";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import SignUpForm from "./Components/Authentication/signupPage/SignUp";
import LoginForm from "./Components/Authentication/loginPage/LoginForm";
import AboutUs from "./Pages/AboutUsPage";
import Resources from "./Pages/Resources";
import Literacy from "./Pages/DigitalLiteracy/Literacy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  // {
  //   element: <Auth />,
  //   children: [
  //     {
  //       path: " /LandingPage",
  //       element: <LandingPage />,
  //     },
  //   ],
  // },
  {
    path: "/SignUpForm",
    element: <SignUpForm />,
  },

  {
    path: "/LoginForm",
    element: <LoginForm />,
  },

  {
    path: "/AboutUs",
    element: <AboutUs />,
  },

  {
    path: "/Resources",
    element: <Resources />,
  },

  {
    path: "/Literacy",
    element: <Literacy />,
  },
]);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
