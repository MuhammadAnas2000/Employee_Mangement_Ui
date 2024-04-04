import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./components/common/common.css";
import { BrowserRouter} from "react-router-dom";
import APPLICATION_ROUTES from "./components/common/routesUtil.jsx";

const App =()=>{
  return (
    <BrowserRouter>
      {APPLICATION_ROUTES}
    </BrowserRouter>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
      <App/>
  </React.StrictMode>
);
