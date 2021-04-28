import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, Wrapper } from './UsersList.styles';

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
const UsersList = () => {
  const [users, setUsers] = useState([]);
  console.log(useState([]));
  const [isLoading, setIsLoading] = useState([]);

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

  return (
    <Wrapper>
      <h1>{isLoading ? 'Loading...' : 'Users List'}</h1>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};
/*
class UsersList extends React.Component {
  state = {
    users: [],
    isLoading: false,
  };
  detectMouseMove = () => {};
  componentDidMount() {
    this.setState({ isLoading: true });
    mockAPI()
      .then((data) => {
        this.setState({ isLoading: false });
        this.setState({ users: data });
      })
      .catch((err) => console.log(err));
  }
  componentDidUpdate(prevState) {
    if (prevState.isLoading !== this.state.isLoading) {
      console.log('Loading state has changed');
    }
  }

  deleteUser = (name) => {
    const filteredUsers = this.state.users.filter((user) => user.name !== name);
    this.setState({ users: filteredUsers });
  };

  render() {
    const { title } = this.props;
    const { isUsersList } = this.state;
    return (
      <Wrapper>
        <h1>{this.state.isLoading ? 'Loading...' : 'Users List'}</h1>

        <StyledList>
          {this.state.users.map((userData) => (
            <UsersListItem deleteUser={this.deleteUser} key={userData.name} userData={userData} />
          ))}
        </StyledList>
      </Wrapper>
    );
  }
}*/
export default UsersList;
