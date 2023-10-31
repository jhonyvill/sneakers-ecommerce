import styled from "styled-components";

export const Item = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  gap: 0 0.625rem;
  max-height: 3.125rem;
`;

export const Photo = styled.img`
  max-width: 3.125rem;
  grid-column: 1;
  grid-row: span 2;
  border-radius: 4px;
`;

export const Title = styled.h2`
  font-size: inherit;
  font-weight: 400;
  grid-column: 2;
  grid-row: 1;
  margin: 0;
  max-width: 30ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const PriceContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  grid-column: 2;
  grid-row: 2;
  font-weight: 400;
`;

export const TotalPrice = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.blackOpacity};
`;

export const DeleteButton = styled.button`
  background-color: transparent;
  grid-column: 3;
  grid-row: span 2;
  padding: 0;

  &:hover svg > * {
    fill: ${({ theme }) => theme.colors.primaryOrange};
  }
`;
