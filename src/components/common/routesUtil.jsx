import React from 'react';
import { Routes, Route } from 'react-router';
import AddEmployee from "../Sidebar/AddEmployee.jsx";
import Login from "../Login/Login";
import EmployeeHome  from "../../pages/employee/Home.jsx"
import ApplyLeave  from "../../pages/employee/ApplyLeave.jsx"

const APPLICATION_ROUTES =

<Routes>
  <Route path="/" element={<Login />} />
  //Employee Routes
  <Route path="/Employee/Home" element={<EmployeeHome />} />
  <Route path="/Employee/Leave/Apply" element={<ApplyLeave />} />
  //Admin Routes
  <Route path="/AddEmployee" element={<AddEmployee />} />
</Routes>
export default APPLICATION_ROUTES;