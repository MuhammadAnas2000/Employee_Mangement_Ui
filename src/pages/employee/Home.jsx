import React from 'react'

import SideBar from '../../components/SideBar/sideBar.jsx'
import Navbar from '../../components/Navbar/Navbar.jsx'
import { EmployeeSideBarData } from '../../components/SideBar/sideBarData.jsx'

export default function EmployeeHome() {
  return (
        <div className="container-fluid">
        <div className="row">
          <div className="col-xs-8">
           
          </div>
          <div className="col-xs-4">
            <SideBar menuItems={EmployeeSideBarData} />
          </div>
        </div>

        </div>
  )
}
