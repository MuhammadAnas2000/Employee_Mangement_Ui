import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import './sideBar.css';

function SideBar(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
        <nav className={sidebar ? 'side-menu active' : 'side-menu inactive'}>
          <ul className='side-menu-items'>
            <li className='side-toggle' onClick={showSidebar}>
              <Link to='#'>
                <GiHamburgerMenu/>
              </Link>
            </li>
            {props.menuItems.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className={!sidebar ? "side-menu-span inactive" : "side-menu-span"}>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
    </>
  );
}

export default SideBar;
