import "./App.css";
import LandingPage from "./Pages/landingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Pages/loginPage/LoginForm";
import SignUp from "./Pages/signupPage/SignUp";
import NoPage from "./Pages/ErrorPage/NoPage";

const App = () => {
  return (
    <>
      
      
      <BrowserRouter>
     <Routes>
     <Route index element= {<SignUp />} />
      <Route path="/signup" element={<SignUp />}  />
      <Route path="/login" element={<LoginForm/>}  />
      <Route path="/home" element={<LandingPage/>}  />
      <Route path="*" element={<NoPage />} />
     </Routes>
     </BrowserRouter>
   
    </>
    
  );
};

export default App;
