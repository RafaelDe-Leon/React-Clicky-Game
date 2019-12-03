import React from 'react';
import './style.css';

function Navbar(props) {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <a className='navbar-brand' href='index.html'>
        Pokemon Clicky Game
      </a>

      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'></ul>
      </div>
    </nav>
  );
}

export default Navbar;
