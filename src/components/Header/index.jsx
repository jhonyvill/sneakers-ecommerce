import React from "react";
import * as S from "./styles";
import LogoSvg from "../../assets/logo.svg?react";
import Avatar from "../../assets/image-avatar.png";
import HeaderNav from "./HeaderNav";
import Cart from "./Cart";
import ProfileModal from "./ProfileModal";
import { useState } from "react";

const Header = () => {
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  return (
    <S.Container>
      <S.Logo href="/" aria-label="Home">
        <LogoSvg data-testid="logo-svg"/>
      </S.Logo>

      <HeaderNav />
      <Cart />

      <S.ProfileImage
        src={Avatar}
        alt="imagem de perfil"
        width="100px"
        height="100px"
        onClick={() => {
          setProfileModalOpen(!profileModalOpen);
        }}
      />
      {profileModalOpen && (<ProfileModal/>)}
    </S.Container>
  );
};

export default Header;
