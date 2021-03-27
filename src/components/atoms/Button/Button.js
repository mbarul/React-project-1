/* eslint-disable prettier/prettier */
import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icon/delete-icon.svg';
import { StyledButton } from './Button.styles';

const Button = (props) => (
  <StyledButton {...props}>
    <DeleteIcon></DeleteIcon>
  </StyledButton>
);

export default Button;
