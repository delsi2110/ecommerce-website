import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaCar } from 'react-icons/fa';

function Navbar({ cartItemCount }) {
  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='flex' style={{display: "flex"}}>
          <Link to='/' className='nav-link'>
            <FaHome /> Home
          </Link>
          <Link to='/products' className='nav-link'>
            <FaCar /> Products
          </Link>
        </div>
        <Link to='/cart' className='nav-link'>
          <FaShoppingCart /> Cart ({cartItemCount})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
