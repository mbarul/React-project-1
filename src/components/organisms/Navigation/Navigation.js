import React from 'react';
// eslint-disable-next-line prettier/prettier
import { Logo, StyledLink, Wrapper } from './Navigation.style';

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Study
          <br />
          People !
        </h1>
      </Logo>
      <StyledLink to="/">Dashboard</StyledLink>
      <StyledLink to="/add-user">Add user</StyledLink>
      <StyledLink to="/">Settings</StyledLink>
      <StyledLink to="/">Logout</StyledLink>
    </Wrapper>
  );
};

export default Navigation;
