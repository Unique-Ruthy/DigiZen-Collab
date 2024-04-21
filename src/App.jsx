import "./App.css";
// import Contact from "./Pages/ContactPage/Contact";
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
import SocialMediaSafety from "./Pages/Social Media Safety";
import DataPrivacy from "./Pages/Data Privacy &  Protection";
import digiCitizenship from "./Pages/Digital Citizenship/index";
import CyberSecurity from "./Pages/CyberSecurity";
import ForgotPassword from "./Pages/forgotPage";
import EditProfile from "./Pages/EditProfile";
import BlogPage from "./Pages/BlogPage/blogPage";


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

  {
    path: "/SocialMediaSafety",
    element: <SocialMediaSafety />,
  },

  {
    path: "/DataPrivacy",
    element: <DataPrivacy />,
  },

  {
    path: "/ CyberSecurity",
    element: <CyberSecurity />,
  },

  {
    path: "/digiCitizenship",
    element: <digiCitizenship />,
  },

  {
  path: "/forgotPassword",
  element: <ForgotPassword />,
},

{
  path: "/editProfile",
  element:<EditProfile />,
},

{
  path:"/blogPage",
  element: <BlogPage />,
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
