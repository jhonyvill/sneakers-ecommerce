import React from "react";
import * as S from "./styles";
import LogoSvg from "../../assets/logo.svg?react";
import Avatar from "../../assets/image-avatar.png";
import HeaderNav from "./HeaderNav";
// import CartModal from "./CartModal";
// import { useState } from "react";
// import { useRef } from "react";
// import { useEffect } from "react";
import Cart from "./Cart";

const Header = () => {
  console.log('header')

  return (
    <S.Container>
      <S.Logo href="#" aria-label="Home">
        <LogoSvg />
      </S.Logo>

      <HeaderNav />
      <Cart />

      <S.ProfileImage
        src={Avatar}
        alt="imagem de perfil"
        width="100px"
        height="100px"
        />
    </S.Container>
  );
};

export default Header;
