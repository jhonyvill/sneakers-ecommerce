import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem 0.8rem;
  box-sizing: border-box;
  max-width: 28.125rem;

  @media (max-width: ${({ theme }) => theme.screen.tablet}) {
    grid-template-columns: 1fr;
    padding: 0;
    justify-self: center;
    max-width: 100%;
  }
`;

export const Brand = styled.p`
  color: ${({ theme }) => theme.colors.primaryOrange};
  text-transform: uppercase;
  font-weight: 700;
  font-size: ${({ theme }) => theme.sizes.xs};
  letter-spacing: 0.15rem;

  @media (max-width: ${({ theme }) => theme.screen.largeMobile}) {
    letter-spacing: 0.1rem;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.blackOpacity};
  font-weight: 700;
  font-size: ${({ theme }) => theme.sizes.xxl};
  line-height: 1.1;

  @media (max-width: ${({ theme }) => theme.screen.largeMobile}) {
    font-size: ${({ theme }) => theme.sizes.xl};
  }
`;

export const Description = styled.p`
  line-height: 1.6;
  margin-top: 1.25rem;

  @media (max-width: ${({ theme }) => theme.screen.largeMobile}) {
    font-size: ${({ theme }) => theme.sizes.s};
    line-height: 1.4;
    margin-top: 0;
  }
`;

export const PriceContainer = styled.div`
  margin: 0.625rem 0;
  align-self: flex-start;

  @media (max-width: ${({ theme }) => theme.screen.largeMobile}) {
    display: flex;
    align-items: center;
    align-self: initial;
    justify-content: space-between;
  }
`;

export const FinalPriceContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 1rem;
  font-weight: 700;
`;

export const FinalPrice = styled.span`
  color: ${({ theme }) => theme.colors.blackOpacity};
  font-size: ${({ theme }) => theme.sizes.xl};

  grid-column: 1;
`;

export const Discount = styled.span`
  color: ${({ theme }) => theme.colors.primaryOrange};
  background-color: ${({ theme }) => theme.colors.paleOrange};
  padding: 0.2rem 0.5rem;
  border-radius: 6px;
  grid-column: 2;
`;

export const Price = styled.p`
  font-weight: 700;
  text-decoration: line-through;
  opacity: 0.5;
  grid-column: 1/-1;
`;
