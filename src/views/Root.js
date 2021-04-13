/*Library React*/
import React, { useState } from 'react';
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
/*users data */
import { users as usersData } from 'data/users';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import AddUser from './AddUser';
import Dashboard from './Dashboard';

/*props - arguments to a function when we create a component inside of react and we want to render it, read only, describes what we see*/
/*state - influences output, must be modified with this.setState()*/
const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const Root = () => {
  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState(initialFormState);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleInputChange = (e) => {
    console.log(formValues);
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };

    setUsers([newUser, ...users]);
    setFormValues(initialFormState);
  };

  return (
    <Router>
      {/* Start using of theme from: styles/theme.js, for all components*/}
      <ThemeProvider theme={theme}>
        {/* Setting global styles*/}
        <GlobalStyle />
        {/*Main template includes: navigation and else components of our navigation*/}
        <MainTemplate>
          <Wrapper>
            {/* navigaion to change pages without reload browser*/}
            <Switch>
              {/*Route of our website- changes of pages*/}
              {/*page-addUser*/}
              <Route path="/add-user">
                <AddUser
                  formValues={formValues}
                  handleAddUser={handleAddUser}
                  handleInputChange={handleInputChange}
                />
              </Route>
              {/*page-Main*/}
              <Route path="/">
                <Dashboard deleteUser={deleteUser} users={users} />
              </Route>
            </Switch>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
