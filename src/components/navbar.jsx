import React, { Component } from 'react';

const NavBar = (props) => {
    return <div>
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar <span className="badge bg-pill bg-secondary">{props.totalCounter}</span>
        </a>
      </div>
    </nav>
    
            </div>;
}

 
export default NavBar;