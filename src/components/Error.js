import React from 'react';
import './style/Error.css';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="error-container">
      <h1 className="error-message">This page does not exist!</h1>
      <img src="https://kfg6bckb.media.zestyio.com/yalantis-interactive-404.gif" alt="Login"/>
      <br></br>
      <Link to="/" style={{fontSize:"25px"}}>back to home</Link>
    </div>
  );
}

export default Error;
