import React from "react";
import * as S from "./styles";
import CloseSvg from "../../../assets/icon-close.svg?react";
import PropTypes from "prop-types";
import ProductImages from "../ProductImages";

const ProductImageModal = ({ images, handleModalActive }) => {
  return (
    <S.Container >
      <S.Modal >
        <S.CloseButton onClick={() => handleModalActive(false)}>
          <CloseSvg />
        </S.CloseButton>

        <S.ImageContainer >
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
  images: PropTypes.array,
  handleModalActive: PropTypes.func,
};

export default ProductImageModal;
