import styled from "styled-components";
 
 export const ModalContainer = styled.div`
   background: #fff;
   width: 18.75rem;
   height: 9.375rem;
   border-radius: 8px;
   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
   padding: 15px;
   display: flex;
   flex-direction: column;
   position: absolute;
   top: 100%;
   right: 0%;
   z-index: 10;
 
   @media (max-width: ${({ theme }) => theme.screen.mobile}) {
     max-width: 8.5rem;
   }
 `;

 export const ModalDescription = styled.div`
   width: 100%;
   height: 100%;
   padding: 1rem 0;
   font-weight: 700;
   font-size: ${({ theme }) => theme.sizes.s};
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 0 0.625rem;
 
   @media (max-width: ${({ theme }) => theme.screen.mobile}) {
     font-size: ${({ theme }) => theme.sizes.xs};
   }
 `