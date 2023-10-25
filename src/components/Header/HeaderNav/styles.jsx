import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;

`

export const StyledItem = styled.li`
  position: relative;

  &:hover a {
    color: ${({ theme }) => theme.colors.primaryOrange};
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -3rem;
    transition: 0.2s;
    background-color: ${({ theme }) => theme.colors.primaryOrange};
  }
  &:hover::after {
    width: 100%;
  }
`;