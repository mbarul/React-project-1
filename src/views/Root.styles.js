/* CSS */
import styled from 'styled-components';

/* export command we use to export our part of code to the next file where we can use  */
export const Wrapper = styled.div`
  /* CSS styles of main div - Root */
  background-color: ${({ theme }) => theme.colors.lightGray};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
