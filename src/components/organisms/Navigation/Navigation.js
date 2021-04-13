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
      {/*each link have prop inside, example: to="/add-user" and move us to currect route
      Parameter exact take exact name of component: "/", "/add-user"*/}
      <StyledLink exact to="/">
        Dashboard
      </StyledLink>
      <StyledLink to="/add-user">Add user</StyledLink>
      <StyledLink to="/">Settings</StyledLink>
      <StyledLink to="/">Logout</StyledLink>
    </Wrapper>
  );
};

export default Navigation;
