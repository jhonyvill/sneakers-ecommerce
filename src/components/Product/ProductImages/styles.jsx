import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.3rem;

  @media (max-width: ${({ theme }) => theme.screen.tablet}) {
    width: 100vw;
    height: 50vh;
  }

`;

export const FeaturedImage = styled.img`
  border-radius: 10px;
  cursor: pointer;


  @media (max-width: ${({ theme }) => theme.screen.tablet}) {
    border-radius: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const ImagesGrid = styled.div`
  max-width: 29rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-self: center;
  gap: 1.3rem;

  @media (max-width: ${({ theme }) => theme.screen.tablet}) {
    display: none;
  }
`;

export const Image = styled.div`
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.7);
    transition: opacity 0.1s;
    display: inline-block;
    border-radius: 10px;
    box-sizing: border-box;
  }

  &:hover::before {
    opacity: 1;
  }
  &.active::before {
    border: 2px solid ${({ theme }) => theme.colors.primaryOrange};
    opacity: 1;
  }

  & img {
    flex: 1;
    border-radius: 10px;
  }
`;
