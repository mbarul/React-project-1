import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles';

//Template container
//Props children everyting inside in tags of main template
const MainTemplate = (props) => {
  return (
    <Wrapper>
      <Navigation />
      {props.children}
    </Wrapper>
  );
};

export default MainTemplate;
