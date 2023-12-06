import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../src/Themes";

export function renderWithTheme(children) {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}

export const productDefault = {
  id: "id-1",
  brand: "brand mock",
  title: "title mock",
  price: 250,
  discount: 0.5,
  description: "description mock",
  pictures: [
    {
      src: "image-1.jpg",
      thumb: "thumbnail-1.jpg",
      alt: "product 1",
    },
    {
      src: "image-2.jpg",
      thumb: "thumbnail-2.jpg",
      alt: "product 2",
    },
    {
      src: "image-3.jpg",
      thumb: "thumbnail-3.jpg",
      alt: "product 3",
    },
    {
      src: "image-4.jpg",
      thumb: "thumbnail-4.jpg",
      alt: "product 4",
    },
    {
      src: "image-5.jpg",
      thumb: "thumbnail-5.jpg",
      alt: "product 5",
    },
  ],
};

export const itemDefault = {
  product: { ...productDefault },
  quantity: 1,
};
