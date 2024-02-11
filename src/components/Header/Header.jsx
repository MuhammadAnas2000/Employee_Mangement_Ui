import { useState } from "react";

import { ProSidebar, Menu, MenuItem, SidebarHeader } from "react-pro-sidebar";

import { FaList } from "react-icons/fa";
import { FiHome, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

import { Link } from "react-router-dom";

import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
import NavBar from "../Navbar/NavBar";

export const Header = () => {
  const [menuCollapse, setmenuCollapse] = useState(false);
  const [activeItem, setactiveItem] = useState(0);
  const menuIconClick = () => {
    menuCollapse ? setmenuCollapse(false) : setmenuCollapse(true);
  };
  const clickMenuItem = (menuItem) => {
    console.log("Before state change:", menuCollapse, activeItem);
    setactiveItem(menuItem);
    console.log("After state change:", menuCollapse, activeItem);
  };

  return (
    <div id="header">
      
      {<div style={{ display: 'flex' }}>
        <div id="navbar">
          <NavBar />
        </div>
      </div> }

            
      <ProSidebar  collapsed={menuCollapse} style={{ position: 'fixed', left: 0, height: '100%' }}>
        <SidebarHeader>
          <div className="logotext">
            <p>{menuCollapse ? "Logo" : "Logo"}</p>
          </div>

          <div className="closeMenu" onClick={menuIconClick}>
            {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
          </div>
        </SidebarHeader>
        <Menu iconShape="square">
          <MenuItem
            active={activeItem == "DASHBOARD"}
            icon={<FiHome />}
            onClick={() => clickMenuItem("DASHBOARD")}
          >
            {" "}
            <span className="sidebarText">DASHBOARD</span>
          </MenuItem>
          <MenuItem
            active={activeItem == "addemp"}
            icon={<FaList />}
            onClick={() => clickMenuItem("addemp")}
          >
            {" "}
            <Link to="/AddEmployee">
              <span className="sidebarText">Add Employee</span>
            </Link>
          </MenuItem>
          <MenuItem
            active={activeItem == "LeaveReport"}
            icon={<RiPencilLine />}
            onClick={() => clickMenuItem("LeaveReport")}
          >
            <span className="sidebarText">Leave Report</span>
          </MenuItem>
          <MenuItem
            active={activeItem == "SalaryReport"}
            icon={<RiPencilLine />}
            onClick={() => clickMenuItem("SalaryReport")}
          >
            <span className="sidebarText">Salary Report</span>
          </MenuItem>
          <MenuItem
            active={activeItem == "addsal"}
            icon={<BiCog />}
            onClick={() => clickMenuItem("addsal")}
          >
            <Link to="/addsal">
              <span className="sidebarText">Add Salary</span>
            </Link>
          </MenuItem>
        </Menu>
      </ProSidebar>
      
    </div>
  );
};

export default Header;
