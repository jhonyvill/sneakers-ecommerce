import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  background-color: ${({ theme }) => theme.colors.white};
  flex-direction: column;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.sizes.xxxl};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryOrange};

  @media (max-width: ${({ theme }) => theme.screen.largeMobile}) {
    font-size: ${({ theme }) => theme.sizes.xxl};
  }
`;

export const Message = styled.p`
  font-size: ${({ theme }) => theme.sizes.l};
  margin-top: 1.25rem;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.screen.largeMobile}) {
    font-size: ${({ theme }) => theme.sizes.m};
  }
`;

