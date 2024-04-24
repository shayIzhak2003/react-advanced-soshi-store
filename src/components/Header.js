import React from 'react';
import { Link } from 'react-router-dom'; 
import Search from './Search'; 

const Header = () => {
  return (
    <div className="header">
      <div className="navigation">
        <h2 className="logo">Sushi House</h2>
        <Link to="/cart">View Cart</Link>
        <Link to="/favorites">View favorites</Link>
        <Link to="/login">Login</Link>
        <Link to="/">Home</Link>
      </div>
      <img
        src="images/bg.jpg"
        alt="Sushi House"
        title="Sushi House"
      />
      <div className="description">
        <h1 className="animate-charcter">Welcome to our sushi house</h1>
        <p>
          Welcome to Zen Sushi Bar, where every bite is a journey into the delicate art of
          Japanese culinary perfection.
        </p>
      </div>
    </div>
  );
};

export default Header;