import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="nav-bar">
      {/* <img className="logo" src={logo}></img> */}
      <div className="nav-link-container">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/saved">My Pokemon</Link>
        <Link className="nav-link" to="/allPokemon">All Pokemon</Link>
      </div>
    </nav>
  )
}

export default Navigation