import React from "react";
import { useState } from "react";

export const ImageProductContext = React.createContext();

export const ImageProductProvider = ({ children }) => {
  const [selectedImage, setSelectedImage] = useState({
    image: null,
    index: 0,
  });

  const handleSelectedModalImage = (image, index) => {
    setSelectedImage({ image, index });
  };

  return (
    <>
      <ImageProductContext.Provider
        value={{
          imageSelected: selectedImage.image,
          indexImageSelected: selectedImage.index,
          handleSelectedModalImage,
        }}
      >
        {children}
      </ImageProductContext.Provider>
    </>
  );
};
