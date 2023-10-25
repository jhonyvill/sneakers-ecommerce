import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrayishBlue};
  font-size: ${({ theme }) => theme.sizes.m};
  color: ${({ theme }) => theme.colors.blackOpacity};
  border-radius: 0.625rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* grid-column: 1; */
  height: 3.5rem;
  width: 15em;
  /* min-width: 100px; */
  
  @media (max-width: ${({theme}) => theme.screen.tablet}){
    width: 180px;

    }
    @media (max-width: ${({theme}) => theme.screen.largeMobile}){
      width: 100%;
    }
`;

export const CounterButton = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  padding: 1rem;
  height: 100%;

  &:hover {
    opacity: 0.7;
  }
  & svg {
    scale: 0.8;
  }
  @media (max-width: ${({ theme }) => theme.screen.largeMobile}) {
    & svg {
      scale: 1;
    }
  }
`;
