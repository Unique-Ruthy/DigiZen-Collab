import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UseContextParent from "./Components/context/useContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UseContextParent>
      <App />
    </UseContextParent>
  </React.StrictMode>
);
