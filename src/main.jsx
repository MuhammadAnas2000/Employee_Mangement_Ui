import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./components/Login/Login";
import "./components/common/common.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import AddEmployee from "./components/Sidebar/AddEmployee.jsx";
import Salary from "./components/Sidebar/Salary.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Login/>
  /*
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/AddEmployee" element={<AddEmployee />} />
        <Route path="/addsal" element={<Salary />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>*/
);
