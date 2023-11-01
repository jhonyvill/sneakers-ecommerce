import styled from "styled-components";

export const Cart = styled.button`
  position: relative;
  background-color: transparent;
`;

export const CartDetail = styled.span`
  padding: 0 5px;
  background-color: ${({ theme }) => theme.colors.primaryOrange};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.sizes.xxs};
  text-align: center;
  border-radius: 5px;

  position: absolute;
  right: -0.125rem;
  top: -0.25rem;
`;
