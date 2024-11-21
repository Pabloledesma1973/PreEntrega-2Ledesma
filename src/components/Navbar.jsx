import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = ({ cartItemCount }) => {
  return (
    
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Tienda Ropa</Link>
      </div>
      <div className="categories">
        <Link to="/category/hombres">Hombres</Link>
        <Link to="/category/mujeres">Mujeres</Link>
        <Link to="/category/ninos">Niños</Link>
      </div>
      <div className="cart">
        <Link to="/cart">
          <span className="cart-icon">
            🛒
            {
              <span className="cart-count">5</span>
              
            }
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
