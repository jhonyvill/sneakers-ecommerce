import React from "react";
import * as S from "./styles";
import LogoSvg from "../../assets/logo.svg?react";
import CartSvg from "../../assets/icon-cart.svg?react";
import Avatar from "../../assets/image-avatar.png";
import HeaderNav from "./HeaderNav";

const Header = () => {
  return (
    <S.Container>
      <S.Logo href="#" aria-label="Home">
        <LogoSvg />
      </S.Logo>

      <HeaderNav />

      <S.Cart
        aria-label="carrinho de compras"
        aria-expanded={false}
      >
        <CartSvg />
      </S.Cart>

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
