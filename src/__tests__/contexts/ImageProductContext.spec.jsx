import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithTheme } from "../../../.jest/utils";
import { CartProvider } from "../../contexts/CartContext";
import { ImageProductProvider } from "../../contexts/ImageProductContext";
import Product from "../../components/Product";

function renderProduct() {
  return renderWithTheme(
    <CartProvider>
      <ImageProductProvider>
        <Product />
      </ImageProductProvider>
    </CartProvider>
  );
}

jest.mock("../../hooks/useMedia", () => ({
  __esModule: true,
  useMedia: () => {
    return false;
  },
}));

jest.mock("../../hooks/useFetch", () => ({
  __esModule: true,
  useFetch: () => ({
    data: {
      id: "id-1",
      brand: "brand-1",
      title: "title-1",
      price: 10,
      discount: 0.5,
      description: "description-1",
      pictures: [
        {
          src: "image-1.jpg",
          thumb: "thumbnail 1.jpg",
          alt: "product 1",
        },
        {
          src: "image-2.jpg",
          thumb: "thumbnail 2.jpg",
          alt: "product 2",
        },
        {
          src: "image-3.jpg",
          thumb: "thumbnail 3.jpg",
          alt: "product 3",
        },
        {
          src: "image-4.jpg",
          thumb: "thumbnail 4.jpg",
          alt: "product 4",
        },
      ],
    },
    request: jest.fn(),
  }),
}));

describe("ImageProductContext", () => {
  it("should change featured image on click image from grid", async () => {
    renderProduct();
    
    const firstGridImage = screen.getByTestId("grid-image-0");
    const secondGridImage = screen.getByTestId("grid-image-1");
    const thirdGridImage = screen.getByTestId("grid-image-2");
    const fourthGridImage = screen.getByTestId("grid-image-3");
    
    expect.assertions(5);
    const featuredImage = screen.getByTestId("featured-image");
    expect(featuredImage.alt).toBe("product 1");

    await userEvent.click(secondGridImage);
    expect(featuredImage.alt).toBe("product 2");

    await userEvent.click(thirdGridImage);
    expect(featuredImage.alt).toBe("product 3");

    await userEvent.click(fourthGridImage);
    expect(featuredImage.alt).toBe("product 4");

    await userEvent.click(firstGridImage);
    expect(featuredImage.alt).toBe("product 1");
  });

  it("should change featured image on click next button or previous button", async () => {
    renderProduct();

    const regionProductImages = screen.getByRole('region', { name: 'imagens do produto'});
    const featuredImage = within(regionProductImages).getByTestId('featured-image');
    await userEvent.click(featuredImage);

    const previousButton = screen.getByRole("button", { name: /imagem anterior/i,});
    const nextButton = screen.getByRole("button", { name: /próxima imagem/i });

    const regionModal = screen.getByRole('region', { name: 'modal imagens do produto'});
    const featuredImageModal = within(regionModal).getByTestId('featured-image');
    
    expect.assertions(3);    
    expect(featuredImageModal.alt).toBe("product 1");
    await userEvent.click(nextButton);
    expect(featuredImageModal.alt).toBe("product 2");
    await userEvent.click(previousButton);
    expect(featuredImageModal.alt).toBe("product 1");
  });

  it("should render ProductModal with image selected", async () => {
    renderProduct();
    const regionProductImages = screen.getByRole('region', { name: 'imagens do produto'});
    const featuredImage = within(regionProductImages).getByTestId('featured-image');

    const secondGridImage = screen.getByTestId("grid-image-1");
    await userEvent.click(secondGridImage);
    expect(featuredImage.alt).toBe("product 2");

    await userEvent.click(featuredImage);

    const regionModal = screen.getByRole('region', { name: 'modal imagens do produto'});
    expect(regionModal).toBeInTheDocument();
    const featuredImageModal = within(regionModal).getByTestId('featured-image');
    expect(featuredImageModal.alt).toBe("product 2");
  });
});
