import React from "react";
import { useState } from "react";

const useProductImage = (images) => {
  const [featuredImage, setFeaturedImage] = useState(images[0]);
  const [imageIndexActive, setImageIndexActive] = useState(0);

  function handleChangeImage(images, indexClicked) {
    if (indexClicked >= 0 && indexClicked <= images.length - 1) {
      setFeaturedImage(images[indexClicked]);
      setImageIndexActive(indexClicked);
    }
  }
  return { featuredImage, imageIndexActive, handleChangeImage };
};

export default useProductImage;
