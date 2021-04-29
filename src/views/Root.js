import React, { useState, useEffect } from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Form from '../components/organisms/Form/Form';
import { users as usersData } from 'data/users';

/*Method Render 
in class Render we need render(){} method, but in function component we dont need it

State - we can modify without reload website;

in method onClick we can use method of class component

with setState we can use key(object) to change

in button we declare function so we need use function like as arrow function

when we put arguments and name of function we need also declare

Change name:
<h1>{this.state.isUsersList ? 'Users list' : 'Students list'}</h1>
<button onClick={() => this.setState({ isUsersList: !this.state.isUsersList })}> Change title</button> 
Second version to change name:
toggleListTitle = () => {
    this.setState((prevState) => ({ iseUsersList: !prevState.isUsersList }));
  };
  render() {
    return (
      <Wrapper>
        <h1>{this.state.isUsersList ? 'Users list' : 'Students list'}</h1>
        <button onClick={this.toggleListTitle}> Change title</button>

 17:50 - dostanie się do propsów ktore są przekazane w komponencie klasowym this.props.nazwa
  a komponencie funcyjnym robimy to tylko z props (bez this)
  destrukturyzacja w komponencie klasowym - stworzenie w renderze const
  /*name - to parametr
      Methods:
      componentDidMount() {}
      componentDidUpdate() {}
      componentWillUnmount() {}

  Hooki to są metody które możemy wykorzystywać w komponentach funkcyjnych:
  useState, useEffect (zawiera - componentDidMount() {}
      componentDidUpdate() {}
      componentWillUnmount() {})
  */
//Imitacja zapytania API
const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};
const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};
const Root = () => {
  const [users, setUsers] = useState(usersData);
  console.log(useState([]));
  const [isLoading, setIsLoading] = useState([]);
  const [formValues, setFormValues] = useState(initialFormState);

  useEffect(() => {
    setIsLoading(true);
    mockAPI()
      .then((data) => {
        setIsLoading(false);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log('Loading state has changed');
  }, [isLoading]);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    console.log(filteredUsers);
    setUsers(filteredUsers);
  };
  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
    console.log(formValues);
  };
  //e = event
  //e.preventDefault(); - nie powoduje przeładowania strony
  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };
    setUsers([newUser, ...users]);
    //czyszczenie formularza za kazdym razem po dodaniu
    setFormValues(initialFormState);
  };
  //Control Input - stan, będzie ciągle świadomy to co się dzieje w inpucie
  //Wartością w inpucie będzie wartość w stanie
  //Router- zapewnia przemieszczanie sié miédzy stronami
  //Switch pozwala na wybieranie stron na ktorych sie znajdujemy
  //Route to po prostu osobny widok
  //exact w route - oznacza że musi byc dokładna nazwa na zmiana strony
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/add-user">Add user</Link>
          </nav>
          <Switch>
            <Route path="/" exact>
              <UsersList deleteUser={deleteUser} users={users} />
            </Route>
            <Route path="/add-user">
              <Form formValues={formValues} handleAddUser={handleAddUser} handleInputChange={handleInputChange} />
            </Route>
          </Switch>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
