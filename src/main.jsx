import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./components/Login/Login";
import "./components/common/common.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import AddEmployee from "./components/Sidebar/AddEmployee.jsx";
import NavBar from "./components/Navbar/NavBar.jsx";
import Salary from "./components/Sidebar/Salary.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

const headings = ["DASHBOARD", "Add Employee", "Leave Report", "Salary Report", "Add Salary"];

const App =()=>{

  return (
    <div className="container-fluid">
    <div className="col-md-3">
      <Header headings={headings}/>
    </div>
    <div className="col-md-9">
      <div className="main">
        <NavBar/>
        <Routes>
          <Route path="/AddEmployee" element={<AddEmployee />} />
          <Route path="/addsal" element={<Salary />} />
        </Routes>
      </div>
    </div>
  </div>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);
