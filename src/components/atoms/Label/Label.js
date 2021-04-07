/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const Label = styled.label`
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.M};
  color: ${({ theme }) => theme.colors.darkGrey};
`;
