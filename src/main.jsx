import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./components/common/common.css";
import { BrowserRouter} from "react-router-dom";
import APPLICATION_ROUTES from "./components/common/routesUtil.jsx";
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {AuthProvider} from './context/UserContext.jsx'

const App =()=>{
  return (
    <AuthProvider>
      <BrowserRouter>
        {APPLICATION_ROUTES}
        <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
      </BrowserRouter>
    </AuthProvider>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
      <App/>
  </React.StrictMode>
);
