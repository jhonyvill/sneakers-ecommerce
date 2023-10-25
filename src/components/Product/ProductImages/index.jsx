import React from "react";
import * as S from "./styles";
import PropTypes from "prop-types";
import useProductImage from "../../../hooks/useProductImage";

const ProductImages = ({ images }) => {
  const { featuredImage, imageIndexActive, handleChangeImage } = useProductImage(images);

  return (
    <S.Container>
      <S.FeaturedImage
        src={featuredImage.src}
        alt={featuredImage.alt}
        width="1000px"
        height="1000px"
      />

      <S.ImagesGrid>
        {images.map((image, index) => {
          return (
            <S.Image
              key={index}
              className={imageIndexActive === index && "active"}
              onClick={() => handleChangeImage(images, index)}
            >
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
  images: PropTypes.array,
};

export default ProductImages;
