import React from "react";
import * as S from "./styles";

const HeaderNav = () => {
  return (
    <S.Container>
      <S.NavLinks>
        <S.StyledItem>
          <a href="#">Collections</a>
        </S.StyledItem>
        <S.StyledItem>
          <a href="#">Men</a>
        </S.StyledItem>
        <S.StyledItem>
          <a href="#">Women</a>
        </S.StyledItem>
        <S.StyledItem>
          <a href="#">About</a>
        </S.StyledItem>
        <S.StyledItem>
          <a href="#">Contact</a>
        </S.StyledItem>
      </S.NavLinks>
    </S.Container>
  );
};

export default HeaderNav;
