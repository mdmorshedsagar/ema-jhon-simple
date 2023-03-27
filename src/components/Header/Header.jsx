import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
const Header = () => {
    return (
     
           <div className="bg-primary navbar px-8">
  <div className="flex-1 ">
     <img src={logo} alt="" srcset="" />
  </div>
  <div className="flex-none ">
    <ul className="menu menu-horizontal px-1 text-white">
      <li><a href="/Order">Order</a></li>
      <li><a href="/Order-review">Order review</a></li>
      <li><a href="/Manage-interview">Manage interview</a></li>
      <li><a href="/login">Login</a></li>
    </ul>
  </div>
</div>
     
    );
};

export default Header;