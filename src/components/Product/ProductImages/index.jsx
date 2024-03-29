import React from "react";
import * as S from "./styles";
import NextSvg from "../../../assets/icon-next.svg?react";
import PreviousSvg from "../../../assets/icon-previous.svg?react";
import PropTypes from "prop-types";
import { useMedia } from "../../../hooks/useMedia";
import { useProductImage } from "../../../hooks/useProductImage";

const ProductImages = ({ images, modalActive, handleModalActive }) => {
  const {
    featuredImage,
    imageIndexActive,
    handleChangeImage,
    handleClickFeaturedImage,
  } = useProductImage(images);

  const smallScreen = useMedia("(max-width: 820px)");

  return (
    <S.Container aria-label="imagens do produto">
      <S.FeaturedImageContainer
        data-testid="container-featured-image"
        className={smallScreen && modalActive && "small"}
      >
        <S.FeaturedImage
          data-testid="featured-image"
          width="1000px"
          height="1000px"
          src={featuredImage.src}
          alt={featuredImage.alt}
          onClick={() => {
            if (!modalActive) {
              handleClickFeaturedImage();
              handleModalActive(true);
            }
          }}
        />

        {(modalActive || smallScreen) && (
          <S.ButtonWrapper>
            <S.PreviousButton
              aria-label="imagem anterior"
              onClick={() => {
                const previousIndex = imageIndexActive - 1;
                handleChangeImage(images[previousIndex], previousIndex);
              }}
            >
              <PreviousSvg />
            </S.PreviousButton>
            <S.NextButton
              aria-label="próxima imagem"
              onClick={() => {
                const nextIndex = imageIndexActive + 1;
                handleChangeImage(images[nextIndex], nextIndex);
              }}
            >
              <NextSvg />
            </S.NextButton>
          </S.ButtonWrapper>
        )}
      </S.FeaturedImageContainer>

      <S.ImagesGrid>
        {images.map((image, index) => {
          return (
            index < 4 && (
              <S.Image
                data-testid={`grid-image-${index}`}
                key={index}
                className={imageIndexActive === index && "active"}
                onClick={() => handleChangeImage(image, index)}
              >
                <img
                  width="176px"
                  height="176px"
                  src={image.thumb}
                  alt={image.alt}
                />
              </S.Image>
            )
          );
        })}
      </S.ImagesGrid>
    </S.Container>
  );
};

ProductImages.propTypes = {
  images: PropTypes.array.isRequired,
  modalActive: PropTypes.bool.isRequired,
  handleModalActive: PropTypes.func.isRequired,
};

export default ProductImages;
