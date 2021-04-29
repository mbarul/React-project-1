import styled from 'styled-components';

export const Label = styled.label`
  font-family: sans-serif;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.darkGrey};
`;
