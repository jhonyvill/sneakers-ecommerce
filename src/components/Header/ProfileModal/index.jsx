import React from "react";
import * as S from "./styles";

const ProfileModal = () => {
  return (
    <S.ModalContainer
      data-testid="profile-modal"
      aria-label="informações de usuário"
    >
      <S.ModalDescription>Unavailable.</S.ModalDescription>
    </S.ModalContainer>
  );
};

export default ProfileModal;
