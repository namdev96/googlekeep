import React from 'react';
import keeplogo from '../images/keeplogo.png';
import '../App.css'
const Header = () => {
  return (
    <>
    <div className="header">
    <img  src = {keeplogo}  alt = "logo" width="50" height="50"/>
    </div>
   
    </>
  );
}

export default Header;
