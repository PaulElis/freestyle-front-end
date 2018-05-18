import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <b><NavLink to="/Home">Home</NavLink></b>
      <b>Freelancr</b>
      <b><NavLink to="/MyContracts">MyContracts</NavLink></b>
      <b><NavLink to="/NewContractForm">NewContract</NavLink></b>
      <b><NavLink to="/MyProfile">MyProfile</NavLink></b>
    </div>
  );
};

export default NavBar;
