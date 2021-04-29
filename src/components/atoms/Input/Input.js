import styled from 'styled-components';

export const Input = styled.input`
  padding: 5px 8px;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  box-sizing: border-box;
  box-shadow: -2px 4px 18px rgba(115, 124, 142, 0.09);
  border-radius: 25px;
  &:focus {
    outline: none;
  }
`;
