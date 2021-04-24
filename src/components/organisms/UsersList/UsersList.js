import React from 'react';
import PropTypes from 'prop-types';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, StyledTitle, Wrapper } from './UsersList.styles';
import { UserShape } from 'types/index';
/*Components lifecycle - example 
class UsersList extends React.Components
{
  state = {
    listTitle: 'User's list:'
  }
  render(){
    return(
      <Wrapper>
        <h1>this.state.listTitle</h1>
        //zawsze jak chcemy wywolac jakas funkcje, w ktorej podajemy argument musimy ja zadeklarowac (funkcje)
        <button onClick={() => this.setState({listTitle: 'Students list'})}>Change title</button>
        <StyledList>
          {users.map((userData) => (
            <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
          ))}
        </StyledList>
      </Wrapper>
    )
  }
}
  */
const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <Wrapper>
        <StyledTitle>Students list</StyledTitle>
        <StyledList>
          {users.map((userData) => (
            <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};
//Prop which is an array - arrayof, shape, func
UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default UsersList;
