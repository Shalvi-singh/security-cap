import React from "react";
import './navbar.css';
// import SYWlogo from '../../public/SYWlogo.png';

const Navbar=()=> {
  return (
    <>
    <div className="nav-bar">
        <div className="logo-image">
        <img src="./SYWlogo.png"  /> 
        </div>
        <div className="list">
          <a href="#">Home</a>
          <a href="#">News</a>
          <a href="#">Contact</a>
          <a href="#">About</a>
      <span></span>
        </div>
    </div>
     </>
  );
}

export default Navbar;