/*Library React*/
import React from 'react';
/* Theme for all react components */
import { ThemeProvider } from 'styled-components';
/* Global styles */
import { GlobalStyle } from 'assets/styles/GlobalStyle';
/*Importing styles of theme for all components */
import { theme } from 'assets/styles/theme';
/*Styles of Root */
import { Wrapper } from './Root.styles';
/*importing navigaion */
/*import library react-router-dom*/
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import UsersProvider from 'providers/UsersProvider';

/*props - arguments to a function when we create a component inside of react and we want to render it, read only, describes what we see*/
/*state - influences output, must be modified with this.setState()*/

const Root = () => {
  return (
    <Router>
      {/* Start using of theme from: styles/theme.js, for all components*/}
      <ThemeProvider theme={theme}>
        {/* Setting global styles*/}
        <GlobalStyle />
        {/*Main template includes: navigation and else components of our navigation*/}
        <MainTemplate>
          <UsersProvider>
            <Wrapper>
              {/* navigaion to change pages without reload browser*/}
              <Switch>
                {/*Route of our website- changes of pages*/}
                {/*page-addUser*/}
                <Route path="/add-user">
                  <AddUser />
                </Route>
                {/*page-Main*/}
                <Route path="/">
                  <Dashboard />
                </Route>
              </Switch>
            </Wrapper>
          </UsersProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
