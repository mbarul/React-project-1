import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles';

//Template container
const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
