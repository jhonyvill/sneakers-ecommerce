import React from "react";
import * as S from "./styles";
import MenuSvg from "../../../assets/icon-menu.svg?react";
import CloseSvg from "../../../assets/icon-close.svg?react";
import { useState } from "react";
import { useMedia } from "../../../hooks/useMedia";

const HeaderNav = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const smallScreen = useMedia("(max-width: 820px)");

  return (
    <S.Container>
      {smallScreen && (
        <S.MenuButton
          aria-label="menu"
          aria-expanded={isMenuActive}
          onClick={() => setIsMenuActive(!isMenuActive)}
        >
          {isMenuActive 
            ? (<CloseSvg data-testid="close-svg" />) 
            : (<MenuSvg data-testid="menu-svg" />)
          }
        </S.MenuButton>
      )}

      <S.NavLinks
        data-testid="nav-list"
        className={`${smallScreen && "smallScreen"} ${isMenuActive && "menuActive"}`}
      >
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
