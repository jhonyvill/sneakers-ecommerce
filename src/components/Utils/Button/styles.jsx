import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primaryOrange};
  width: 100%;
  min-width: 8.5rem;
  padding: 1rem 0;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: ${({ theme }) => theme.sizes.s};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 0.625rem;
  height: 3.5rem;

  &:hover {
    opacity: 0.7;
  }

  & svg > * {
    fill: ${({ theme }) => theme.colors.white};
    scale: 0.8;
  }

  &.shadowActive {
    box-shadow: 0 20px 25px 0 ${({ theme }) => theme.colors.paleOrange};
  }

  @media (max-width: ${({ theme }) => theme.screen.tablet}) {
    gap: 0;
    & svg {
      scale: 0.75;
    }
  }
`;
