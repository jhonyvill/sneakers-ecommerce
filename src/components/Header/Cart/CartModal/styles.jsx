import styled from "styled-components";

export const Modal = styled.section`
  width: 21.875rem;
  min-width: 15.625rem;
  min-height: 15rem;

  border: none;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 15px 20px -6px ${({ theme }) => theme.colors.grayishBlue};

  font-size: ${({ theme }) => theme.sizes.s};
  font-weight: 700;

  position: absolute;
  top: 6rem;
  right: -1.25rem;
  z-index: 200;

  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  opacity: 0;
  transform: translateY(-1.25rem);
  animation: transformAnimation 0.2s forwards;

  @media (max-width: ${({ theme }) => theme.screen.largeMobile}) {
    right: 0;
    width: calc(100% - 2rem);
    margin: 0 1rem;
  }
`;

export const Title = styled.div`
  padding: 1rem 1.5rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightGrayishBlue};

  & h2 {
    margin: 0;
    padding: 0;
    font-size: ${({ theme }) => theme.sizes.s};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-grow: 1;
  padding: 1.5rem;

  & button {
    margin-top: 1.5rem;
  }
`;

export const Items = styled.ul`
  width: 100%;
  max-height: 21.875rem;
  overflow: auto;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem 0;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primaryOrange};
    border-radius: 4px;
  }
`;
