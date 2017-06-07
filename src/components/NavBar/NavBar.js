import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  return (
    <div className='NavBar'>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">KIDDY SPACE</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home <span className="sr-only">(current)</span></a></li>
              <li><a href="#">Picks</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/login">Login</a></li>
              <li><a href="/signup">Signup</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
