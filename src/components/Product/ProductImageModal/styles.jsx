import styled, { css } from "styled-components";

export const Container = styled.section`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.blackOpacity};
  left: 0;
  top: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 30rem;
  @media (max-width: ${({ theme }) => theme.screen.tablet}) {
    width: 100%;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -2rem;
  right: -0.5rem;
  color: ${({ theme }) => theme.colors.lightGrayishBlue};
  background-color: transparent;
  border: 1px solid transparent;

  & svg > * {
    fill: ${({ theme }) => theme.colors.lightGrayishBlue};
  }
  &:hover svg > * {
    fill: ${({ theme }) => theme.colors.primaryOrange};
  }
`;
