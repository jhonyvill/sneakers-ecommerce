import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithTheme } from "../../../.jest/utils";
import { CartProvider } from "../../contexts/CartContext";
import { ImageProductProvider } from "../../contexts/ImageProductContext";
import * as useFetchHook from "../../hooks/useFetch";
import * as hookCart from "../../hooks/useCart";
import Product from ".";

function renderProduct() {
  return renderWithTheme(
    <CartProvider>
      <ImageProductProvider>
        <Product />
      </ImageProductProvider>
    </CartProvider>
  );
}

function createUseFetchSpy(){
  return jest.spyOn(useFetchHook, 'useFetch').mockImplementationOnce(() => ({
    data: null,
    request: jest.fn()
  }));
}
function createUseCartSpy(quantityItems, mockFuntion = jest.fn()){
  return jest.spyOn(hookCart, 'useCart').mockReturnValue({
    quantitySelected: quantityItems,
    addCartProduct: mockFuntion
  });
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

describe("<Product />", () => {

  it("should render Product component", async () => {
    renderProduct();

    expect.assertions(5);
    expect(screen.getByRole('button', {name: /add to cart/i})).toBeInTheDocument();
    expect(screen.getByRole('region', {name: 'imagens do produto'})).toBeInTheDocument();
    expect(screen.getByRole('region', {name: /descrição do produto/i})).toBeInTheDocument();
    expect(screen.getByRole('region', {name: 'selecione a quantidade de itens'})).toBeInTheDocument();
    expect(screen.queryByRole('region', {name: 'modal imagens do produto'})).not.toBeInTheDocument();
  });
  it("should render Product component with modal active", async () => {
    const { getByTestId } = renderProduct();

    const featuredImage = getByTestId("featured-image");
    await userEvent.click(featuredImage);

    expect.assertions(1);
    expect(screen.queryByRole('region', {name: 'modal imagens do produto'})).toBeInTheDocument();
  });

  it("should render empty div when data is null", () => {
    createUseFetchSpy();

    renderProduct();
    expect.assertions(5);
    expect(screen.queryByRole('button', {name: /add to cart/i})).not.toBeInTheDocument();
    expect(screen.queryByRole('region', {name: 'imagens do produto'})).not.toBeInTheDocument();
    expect(screen.queryByRole('region', {name: /descrição do produto/i})).not.toBeInTheDocument();
    expect(screen.queryByRole('region', {name: 'selecione a quantidade de itens'})).not.toBeInTheDocument();
    expect(screen.queryByRole('region', {name: 'modal imagens do produto'})).not.toBeInTheDocument();
  });

  it("should call 'addCartProduct' function when addToCart button clicked", async () => {
    const mockFuntion = jest.fn();
    createUseCartSpy(0, mockFuntion);

    renderProduct();

    const button = screen.getByRole('button', {name: /add to cart/i});
    await userEvent.click(button);

    expect.assertions(1);
    expect(mockFuntion).toHaveBeenCalledTimes(1);
  });
});

describe("<Product /> snapshots", () => {
  it("should match snapshot", () => {
    const { container } = renderProduct();
    expect(container.firstChild).toMatchSnapshot();
  });
  it("should match snapshot when modal active", async() => {
    const { container } = renderProduct();
    const featuredImage = screen.getByTestId("featured-image");
    await userEvent.click(featuredImage);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("should match snapshot when data is null", async() => {
    createUseFetchSpy();
    const { container } = renderProduct();
    expect(container.firstChild).toMatchSnapshot();
  });
});
