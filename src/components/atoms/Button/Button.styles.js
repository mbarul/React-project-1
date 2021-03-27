import styled from 'styled-components';

export const StyledButton = styled.button`
  position: absolute;
  width: 22px;
  height: 22px;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 50px;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0px;

  svg {
    width: 100%;
    height: 100%;
  }
`;
