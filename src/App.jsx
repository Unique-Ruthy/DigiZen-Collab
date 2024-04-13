import "./App.css";
import LandingPage from "./Pages/landingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Pages/loginPage/LoginForm";
import SignUp from "./Pages/signupPage/SignUp";
import NoPage from "./Pages/ErrorPage/NoPage";
import Contact from "./Pages/ContactPage/Contact"
import Category from "./Components/category/index"
import Literacy from "./Pages/DigitalLiteracy/Literacy"

const App = () => {
  return (
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
    
  );
};

export default App;
