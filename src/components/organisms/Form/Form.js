import React from 'react';
/*styles of div as form*/
import { StyledTitle, Wrapper } from '../UsersList/UsersList.styles';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

const Form = ({ handleAddUser, formValues, handleInputChange }) => {
  return (
    <>
      {/*div as form*/}
      <Wrapper as="form" onSubmit={handleAddUser}>
        {/*title of add user form field*/}
        <StyledTitle>Add new student</StyledTitle>
        {/* input name*/}
        <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
        {/* input attendance*/}
        <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
        {/* input average*/}
        <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
        {/*adding button */}
        <Button type="submit">Add</Button>
      </Wrapper>
    </>
  );
};

export default Form;
