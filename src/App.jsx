import "./App.css";
<<<<<<< HEAD
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
=======
import LandingPage from "./Pages/landingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Pages/loginPage/LoginForm";
import SignUp from "./Pages/signupPage/SignUp";
import NoPage from "./Pages/ErrorPage/NoPage";
import Contact from "./Pages/ContactPage/Contact"
import Category from "./Components/category/index"
import Literacy from "./Pages/DigitalLiteracy/Literacy"
>>>>>>> d2891ce7b07c38b465a968b3a07fbab5cdd14dd4

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
]);
const App = () => {
  return (
<<<<<<< HEAD
    <div className="App">
      <RouterProvider router={router} />
    </div>
=======
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
    
>>>>>>> d2891ce7b07c38b465a968b3a07fbab5cdd14dd4
  );
};

export default App;
