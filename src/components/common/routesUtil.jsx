import React from 'react';
import { Routes, Route } from 'react-router';
import AddEmployee from "../Sidebar/AddEmployee.jsx";
import Login from "../Login/Login";
import EmployeeHome  from "../../pages/employee/Home.jsx"

const APPLICATION_ROUTES =

<Routes>
  <Route path="/" element={<Login />} />
  //Employee Routes
  <Route path="/Employee/Home" element={<EmployeeHome />} />
  <Route path="/AddEmployee/Leave" element={<AddEmployee />} />
  <Route path="/AddEmployee/Leave/Pending" element={<AddEmployee />} />
  //Admin Routes
  <Route path="/AddEmployee" element={<AddEmployee />} />
</Routes>
export default APPLICATION_ROUTES;