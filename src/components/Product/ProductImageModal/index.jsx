import React from "react";
import * as S from "./styles";
import CloseSvg from "../../../assets/icon-close.svg?react";
import PropTypes from "prop-types";
import ProductImages from "../ProductImages";

const ProductImageModal = ({ images, handleModalActive }) => {
  return (
    <S.Container aria-label="modal imagens do produto">
      <S.Modal>
        <S.CloseButton data-testid='close-button' onClick={() => handleModalActive(false)}>
          <CloseSvg />
        </S.CloseButton>

        <S.ImageContainer>
          <ProductImages
            images={images}
            modalActive={true}
            handleModalActive={handleModalActive}
          />
        </S.ImageContainer>
      </S.Modal>
    </S.Container>
  );
};

ProductImageModal.protoTypes = {
  images: PropTypes.array.isRequired,
  handleModalActive: PropTypes.func.isRequired,
};

export default ProductImageModal;
