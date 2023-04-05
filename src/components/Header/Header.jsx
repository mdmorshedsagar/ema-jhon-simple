import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
     
           <div className="bg-primary navbar px-8">
  <Link to='/' title='icon' className="flex-1 ">
     <img src={logo} alt="" srcset="" />
  </Link>
  <div className="flex-none ">
    <ul className="menu menu-horizontal px-1 text-white">
      <li><Link title="home" to="/">home</Link></li>
      <li><Link title="order" to="/order">Order</Link></li>
      <li><Link title="order review" to="/orderReview">Order Review</Link></li>
      <li><Link title="mangae enterview" to="/manageEnterview">Manage Enterview</Link></li>
      <li><Link title="login" to="/login">Login</Link></li>

    </ul>
  </div>
</div>
     
    );
};

export default Header;