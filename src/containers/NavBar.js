import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/Home">Home</NavLink>
      Freelancr
      <NavLink to="/MyContracts">MyContracts</NavLink>
      <NavLink to="/NewContractForm">NewContract</NavLink>
      <NavLink to="/MyProfile">MyProfile</NavLink>
    </div>
  );
};

export default NavBar;
