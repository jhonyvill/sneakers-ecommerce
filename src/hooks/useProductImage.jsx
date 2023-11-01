import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { ImageProductContext } from "../contexts/ImageProductContext";

export const useProductImage = (images) => {
  const { imageSelected, indexImageSelected, handleSelectedModalImage } = useContext(ImageProductContext);
  const [featuredImage, setFeaturedImage] = useState({
    image: imageSelected || images[0],
    index: indexImageSelected,
  });

  function handleChangeImage(image, indexClicked) {
    indexClicked >= 0 &&
      indexClicked <= images.length - 1 &&
      indexClicked !== featuredImage.index &&
      setFeaturedImage({ image, index: indexClicked });
  }
  function handleClickFeaturedImage() {
    handleSelectedModalImage(featuredImage.image, featuredImage.index);
  }

  return {
    featuredImage: featuredImage.image,
    imageIndexActive: featuredImage.index,
    handleChangeImage,
    handleClickFeaturedImage,
  };
};
