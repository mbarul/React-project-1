import styled from 'styled-components';

const AddButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 8%;
  padding: 7px 40px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  margin: 15px 0px;
`;

export default AddButton;
