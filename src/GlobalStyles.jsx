import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
    font-family: 'Kumbh Sans', sans-serif;
    font-weight: 400;
    font-size: 1rem;

    @media (max-width: ${({theme}) => theme.screen.largeNotebook}){
      font-size: 90%;
    }
    @media (max-width: ${({theme}) => theme.screen.smallNotebook}){
      font-size: 85%;
    }
    @media (max-width: ${({theme}) => theme.screen.tablet}){
      font-size: 70%;
    }
    @media (max-width: ${({theme}) => theme.screen.smallTablet}){
      font-size: 60%;
    }
  }

  body {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGrayishBlue};
    height: 100vh;
  }

  a{
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkGrayishBlue};
  }

  img{
    display: block;
    max-width: 100%;
    height: auto;
  }

  p,
  h1,
  a,
  ul,
  li{
    margin: 0;
    padding: 0;
  }

  ul{
    list-style: none;
  }

  button{
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 8px;
    font-family: inherit;
  }
`;
