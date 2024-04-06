import React from 'react'
import SideBar from '../../components/SideBar/sideBar.jsx'
import Navbar from '../../components/Navbar/Navbar.jsx'
import { EmployeeSideBarData } from '../../components/SideBar/sideBarData.jsx'

export default function EmployeeHome() {
  return (
    <div className="wrapper">
      <SideBar menuItems={EmployeeSideBarData} />
      <div className="content">
        <div className="container">
        </div>
      </div> 
    </div>
  )
}
