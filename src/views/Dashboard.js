import React from 'react';
import PropTypes from 'prop-types';
import { ViewWrapper } from '../../src/components/molecules/ViewWrapper/ViewWrapper';
import UsersList from '../components/organisms/UsersList/UsersList';
import { UserShape } from 'types';
//Dashboard it's a view which have at the moment only one component: Userlist
const Dashboard = ({ users, deleteUser }) => {
  //styles form viewwrappes

  return (
    <ViewWrapper>
      <UsersList users={users} deleteUser={deleteUser} />
    </ViewWrapper>
  );
};

Dashboard.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default Dashboard;
