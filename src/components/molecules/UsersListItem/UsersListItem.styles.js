import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    background-color: black;
    width: 100%;
    height: 1px;
    bottom: 0px;
  }
`;

export const StorageButton = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme, value }) => {
    if (value > 4) return theme.colors.success;
    if (value > 3) return theme.colors.warning;
    if (value > 2) return theme.colors.error;
  }};
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  justify-content: center;
  text-align: center;
  line-height: 50px;
  font-weight: bold;
  margin: 20px 20px 20px 0px;
`;

export const StorageInfo = styled.div`
  p:first-child {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: bold;
  }
  p:nth-child(2) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
