import React, { useContext } from 'react';
import { ViewWrapper } from '../../src/components/molecules/ViewWrapper/ViewWrapper';
import UsersList from '../components/organisms/UsersList/UsersList';
import { UsersContext } from 'providers/UsersProvider';

//Dashboard it's a view which have at the moment only one component: Userlist
const Dashboard = () => {
  const { users } = useContext(UsersContext);
  //styles form viewwrappes

  return (
    <ViewWrapper>
      <UsersList users={users} />
    </ViewWrapper>
  );
};

export default Dashboard;
