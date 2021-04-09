import React from 'react';
/*importing icon*/
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
/*importing styles of button*/
import { StyledButton } from 'components/atoms/DeleteButton/DeleteButton.styles';

/*delete button component */
const DeleteButton = (props) => (
  <StyledButton {...props}>
    <DeleteIcon />
  </StyledButton>
);

export default DeleteButton;
