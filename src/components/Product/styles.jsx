import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 4rem 2rem;
  gap: 1rem 4rem;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.screen.tablet}) {
    grid-template-columns: 1fr;
    padding: 0;
    gap: 2rem 0;
  }

  @media (max-width: ${({ theme }) => theme.screen.largeMobile}) {
    padding: 0;
  }
`;

export const ImagesContainer = styled.div`
  max-width: 29rem;
  justify-self: center;

  @media (max-width: ${({ theme }) => theme.screen.tablet}) {
    max-width: 100%;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
  max-width: 28.125rem;
  justify-self: center;

  @media (max-width: ${({ theme }) => theme.screen.tablet}) {
    max-width: 600px;
    margin: 0 auto;
  }
  @media (max-width: ${({ theme }) => theme.screen.smallTablet}) {
    max-width: 500px;
  }

`;
export const ProductActionContainer = styled.div`
  grid-column: 2;
  display: flex;
  gap: 1rem 0.8rem;

  @media (max-width: ${({ theme }) => theme.screen.tablet}) {
    grid-column: 1;
  }
  @media (max-width: ${({ theme }) => theme.screen.largeMobile}) {
    flex-direction: column;
  }
`;