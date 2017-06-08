import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div className="NavBar">
      <Link to="/about" className='NavBar-link' >ABOUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to="/" className='NavBar-link' >TOYS</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to="/wishlist" className='NavBar-link' >WISHLIST</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>WELCOME, {props.user.name} </span>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to="" className='NavBar-link' onClick={props.handleLogout} >LOG OUT</Link>
    </div> :
    <div className="NavBar">
      <Link to="/about" className='NavBar-link' >ABOUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to="/" className='NavBar-link' >TOYS</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to="/login" className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/signup" className='NavBar-link'>SIGN UP</Link>
    </div>;

  return (
    <div>
      {nav}
    </div>
  );
};

export default NavBar;
