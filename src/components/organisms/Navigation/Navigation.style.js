import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
  justify-content: flex-start;
  padding: 30px 0;
`;

export const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;
  h1 {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.white};
    text-align: right;
    margin-right: 20px;
  }
`;
//new option to style component: styled(Link(name of component))``, before: styled.div``
//The biggest diference beetwen Link and NavLink is that NavLink has navigation where we are in the present moment
//attrs() - it's object, where we can drop props or atributes, which will be default for all components
//Where key and value have this same name we can write just one time, example: activeClassName: activeClassName -> activeClassName
const activeClassName = 'active-link';
export const StyledLink = styled(NavLink).attrs({
  activeClassName,
})`
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: right;
  margin: 15px 20px 15px auto;
  position: relative;

  &.${activeClassName} {
    &::after {
      opacity: 1;
    }
  }
  &::after {
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    content: '';
    position: absolute;
    width: 19px;
    height: 3px;
    top: 45%;
    transform: translate(-50%);
    right: -30px;
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }
`;
