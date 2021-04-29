import React from 'react';

import { Wrapper } from '../UsersList/UsersList.styles';
import FormField from '../../molecules/FormField/FormField';

const Form = ({ handleAddUser, formValues, handleInputChange }) => {
  return (
    <>
      <Wrapper as="form" onSubmit={handleAddUser}>
        <h1>Add users</h1>
        <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
        <FormField label="Attendance" id="attendance" name="name" value={formValues.attendance} onChange={handleInputChange} />
        <FormField label="Average" id="average" name="name" value={formValues.average} onChange={handleInputChange} />
        <button type="submit">Add user</button>
      </Wrapper>
    </>
  );
};
export default Form;
