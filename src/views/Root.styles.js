import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightgrey};
  display: flex;
  justify-content: center;
  align-items: 100%;
  width: 100%;
  height: 100vh;
`;
