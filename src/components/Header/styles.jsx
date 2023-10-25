import styled from "styled-components";

export const Container = styled.header`
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  align-items: center;
  border-bottom: 0.125rem solid ${({ theme }) => theme.colors.lightGrayishBlue};
  gap: 2.8rem;
  padding: 2rem 0;
  margin: 0 1.5rem;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.screen.tablet}) {
    gap: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.screen.largeMobile}) {
    padding: 1.5rem 0;
    border-bottom: none;
  }
  @media (max-width: ${({ theme }) => theme.screen.mobile}) {
    gap: 0.5rem;
  }
`;

export const Logo = styled.a`

  @media (max-width: ${({ theme }) => theme.screen.mobile}) {
    & svg > * {
      scale: 0.9;
    }
  }
`;

export const Cart = styled.button`
  background-color: transparent;
`;

export const ProfileImage = styled.img`
  width: 3.125rem;
  min-width: 1.6rem;
  border: 1px solid transparent;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryOrange};
  }

  @media (max-width: ${({ theme }) => theme.screen.largeMobile}) {
    width: 1.6rem;
  }
`;
