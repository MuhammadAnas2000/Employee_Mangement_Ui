import { useState } from "react";

import { ProSidebar, Menu, MenuItem, SidebarHeader } from "react-pro-sidebar";

import { FaList } from "react-icons/fa";
import { FiHome, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

import { Link } from "react-router-dom";

import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";

const icons = [<FiHome />, <FaList />, <RiPencilLine />, <RiPencilLine />, <BiCog />];
export const Header = ({ headings }) => {
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
      <ProSidebar collapsed={menuCollapse} style={{ position: 'fixed', left: 0, height: '100%' }}>
        <SidebarHeader>
          <div className="logotext">
            <p>{menuCollapse ? "Logo" : "Logo"}</p>
          </div>

          <div className="closeMenu" onClick={menuIconClick}>
            {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
          </div>
        </SidebarHeader>

        <Menu iconShape="square">
          {headings.map((headings, index) => (

            <MenuItem
              active={activeItem == headings}
              icon={icons[index]}
              onClick={() => clickMenuItem(headings)}
            >
              {" "}
              {index == 1 ? (
                <Link to="/AddEmployee">
                  <span className="sidebarText">{headings}</span>
                </Link>
              ) : index == 4 ? (
                <Link to="/addsal">
                  <span className="sidebarText">{headings}</span>
                </Link>
              ) :
                <Link to="/">
                  <span className="sidebarText">{headings}</span>
                </Link>
              }
            </MenuItem>
          ))}
        </Menu>
      </ProSidebar>

    </div>
  );
};

export default Header;
