import "./App.css";
<<<<<<< HEAD
import LandingPage from "./Pages/landingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Pages/loginPage/LoginForm";
import SignUp from "./Pages/signupPage/SignUp";
import NoPage from "./Pages/ErrorPage/NoPage";
import Contact from "./Pages/ContactPage/Contact"
import Category from "./Components/category/index"
import Literacy from "./Pages/DigitalLiteracy/Literacy"
=======
// import Auth from "./auth";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Login from "./Components/Authentication/loginPage/LoginForm";
import Register from "./Components/Authentication/signupPage/SignUp";
import Aboutus from "./Pages/AboutPage/Aboutus";
import Resources from "./Pages/Resources/Resources";
import DigitalCitizenship from "./Pages/Digital Citizenship";
import Literacy from "./Pages/DigitalLiteracy/Literacy";
import DataPrivacy from "./Pages/Data Privacy &  Protection";
import CyberSecurity from "./Pages/CyberSecurity";
import SocialMediaSafety from "./Pages/Social Media Safety";
>>>>>>> master

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
    path: "/Register",
    element: <Register />,
  },

  {
    path: "/Login",
    element: <Login />,
  },

  {
    path: "/Aboutus",
    element: <Aboutus />,
  },

  {
    path: "/Resources",
    element: <Resources />,
  },

  {
    path: "/DigitalCitizenship",
    element: <DigitalCitizenship />,
  },

  {
    path: "/Literacy",
    element: <Literacy />,
  },

  {
    path: "/DataPrivacy",
    element: <DataPrivacy />,
  },

  {
    path: "/CyberSecurity",
    element: <CyberSecurity />,
  },

  {
    path: "/SocialMediaSafety",
    element: <SocialMediaSafety />,
  },
]);
const App = () => {
  return (
<<<<<<< HEAD
    <>
      
      
      <BrowserRouter>
     <Routes>
     <Route index element= {<SignUp />} />
      <Route path="/signup" element={<SignUp />}  />
      <Route path="/login" element={<LoginForm/>}  />
      <Route path="/home" element={<LandingPage/>}  />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/category" element={<Category/>} />
      <Route path="/literacy" element={<Literacy/>} />
      <Route path="*" element={<NoPage />} />
     </Routes>
     </BrowserRouter>
   
    </>
    
=======
    <div className="App">
      <RouterProvider router={router} />
    </div>
>>>>>>> master
  );
};

export default App;
