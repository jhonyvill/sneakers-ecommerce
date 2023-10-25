import React from "react";
import * as S from "./styles";
import PropTypes from "prop-types";

const ProductImages = ({ images }) => {
  return (
    <S.Container>
      <S.FeaturedImage
        src={images[0].src}
        alt={images[0].alt}
        width="1000px"
        height="1000px"
      />

      <S.ImagesGrid>
        {images.map((image, index) => {
          return (
            <S.Image key={index}>
              <img
                width="176px"
                height="176px"
                src={image.thumb}
                alt={image.alt}
              />
            </S.Image>
          );
        })}
      </S.ImagesGrid>
    </S.Container>
  );
};

ProductImages.propTypes = {
  images: PropTypes.array
};

export default ProductImages;
