import React from 'react';
import { Routes, Route } from 'react-router';
import AddEmployee from "../Sidebar/AddEmployee.jsx";
import Login from "../Login/Login";
import Salary from "../Sidebar/Salary.jsx";

const APPLICATION_ROUTES =

<Routes>
  <Route path="/" element={<Login />} />
  <Route path="/AddEmployee" element={<AddEmployee />} />
  <Route path="/addsal" element={<Salary />} />
</Routes>
export default APPLICATION_ROUTES;