import React from 'react';
/*import { StyledNav } from './Navigation.styles';*/
import { Link } from 'react-router-dom';

const Nav = () => (
  <Nav>
    <Link to="/">Home</Link>
    <Link to="/add-user">Add user</Link>
  </Nav>
);

export default Nav;
