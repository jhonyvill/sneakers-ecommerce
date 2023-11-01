import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;

  &.smallScreen {
    display: none;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};
    width: 12.5rem;
    height: 100vh;
    z-index: 100;
    position: absolute;
    top: 0;
    left: -1.5rem;
    transform: translateX(-1.25rem);
    animation: transformAnimation 0.4s forwards;
    padding: 1.5rem;
    padding-top: 6rem;
    box-sizing: border-box;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 12.5rem;
      width: 100vw;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.blackOpacity};
    }

    &.smallScreen.menuActive {
      display: flex;
    }
  }
  @media (max-width: ${({ theme }) => theme.screen.tablet}) {
    gap: 1rem;
  }
`;

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

  @media (max-width: ${({ theme }) => theme.screen.tablet}) {
    margin: 0.5rem 0;
    font-weight: 700;
    &:hover::after {
      width: 0;
    }
  }
`;

export const MenuButton = styled.button`
  background-color: transparent;
  z-index: 200;
  padding: 0;
`;
