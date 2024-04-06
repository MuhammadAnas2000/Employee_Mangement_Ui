import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const EmployeeSideBarData = [
  {
    title: 'Home',
    path: '/Employee/Home',
    icon: <AiIcons.AiFillHome />,
    cName: 'side-text'
  },
  {
    title: 'Apply Leave',
    path: '/Employee/Leave/Apply',
    icon: <IoIcons.IoIosPaper />,
    cName: 'side-text'
  }
];

export const AdminSidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'side-text'
  },
  {
    title: 'Reports',
    path: '//Salary',
    icon: <IoIcons.IoIosPaper />,
    cName: 'side-text'
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'side-text'
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople />,
    cName: 'side-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'side-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'side-text'
  }
];