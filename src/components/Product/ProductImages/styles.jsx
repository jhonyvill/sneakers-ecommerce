import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.screen.tablet}) {
    height: 50vh;
  }
  @media (max-width: ${({ theme }) => theme.screen.largeMobile}) {
    height: 40vh;
  }
`;

export const FeaturedImageContainer = styled.div`
  position: relative;

  @media (max-width: ${({ theme }) => theme.screen.tablet}) {
    width: 100vw;
    height: 100%;

    &.small{
      width: 90vw;
      height: initial;
      & img {
        border-radius: 10px;
      }
    }
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
  max-width: 27rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-self: center;
  gap: 1.5rem;

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

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const ModalButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  padding: 0.8rem;
  background-color: ${({ theme }) => theme.colors.lightGrayishBlue};
  border: 1px solid transparent;

  & svg {
    scale: 0.8;
  }

  &:hover svg > * {
    stroke: ${({ theme }) => theme.colors.primaryOrange};
  }

  @media (max-width: ${({ theme }) => theme.screen.smallTablet}) {
    padding: 0.6rem;
    & svg {
      scale: 0.7;
    }
  }
  @media (max-width: ${({ theme }) => theme.screen.largeMobile}) {
    height: 2rem;
    width: 2rem;
  }
`;

export const PreviousButton = styled(ModalButton)`
  margin-left: -1.4rem;
  @media (max-width: ${({ theme }) => theme.screen.tablet}) {
    margin-left: 1rem;
  }
`;
export const NextButton = styled(ModalButton)`
  margin-right: -1.4rem;
  @media (max-width: ${({ theme }) => theme.screen.tablet}) {
    margin-right: 1rem;
  }
`;
