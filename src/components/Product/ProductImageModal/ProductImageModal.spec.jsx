import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithTheme, productDefault } from "../../../../.jest/utils";
import { ImageProductProvider } from "../../../contexts/ImageProductContext";
import ProductImageModal from "./";

function renderProductImageModal(images, handleModalActive = jest.fn()){
  return renderWithTheme(
    <ImageProductProvider>
      <ProductImageModal images={images} handleModalActive={handleModalActive} />
    </ImageProductProvider>
  );
}

jest.mock("../../../hooks/useMedia", () => ({
  __esModule: true,
  useMedia: () => {
    return false;
  },
}));

const images = productDefault.pictures;

describe("<ProductImageModal />", () => {
  it("should render close button and images", async () => {
    renderProductImageModal(images);

    const closeModalButton = screen.getByTestId("close-button");
    const featuredImage = screen.getByTestId("featured-image");
    const regionProductImages = screen.getByRole('region', { name: "imagens do produto" });
    const gridImages = screen.getAllByTestId(/grid-image/i);
    const previousButton = screen.getByRole("button", { name: /imagem anterior/i });
    const nextButton = screen.getByRole("button", { name: /próxima imagem/i });

    expect(regionProductImages).toBeInTheDocument();
    expect(closeModalButton).toBeInTheDocument();
    expect(previousButton).toBeInTheDocument();
    expect(featuredImage).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(gridImages).toHaveLength(4)
  });

  it("should call function on click modal close button", async () => {
    const mockedFunction = jest.fn();
    renderProductImageModal(images, mockedFunction);

    const closeModalButton = screen.getByTestId("close-button");
    await userEvent.click(closeModalButton);

    expect.assertions(1);
    expect(mockedFunction).toHaveBeenCalledTimes(1);
  });
});

describe("<ProductImageModal /> snapshots", () => {
  it("should match snapshot", () => {
    const { container } = renderProductImageModal(images);
    expect(container.firstChild).toMatchSnapshot();
  });
});


