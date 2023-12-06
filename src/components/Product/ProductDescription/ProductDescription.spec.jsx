import { screen } from "@testing-library/react";
import { renderWithTheme, productDefault } from "../../../../.jest/utils";
import ProductDescription from ".";

function renderProductDescription(product = productDefault) {
  return renderWithTheme(<ProductDescription product={product} />);
}

const productWithoutDiscount = { ...productDefault, discount: 0 };

describe("<ProductDescription />", () => {
  it("should render ProductDescription component when product have discount", () => {
    renderProductDescription();

    expect(screen.getByText("50%")).toBeInTheDocument();
    expect(screen.getByText("$125.00")).toBeInTheDocument();
    expect(screen.getByText("$250.00")).toBeInTheDocument();
    expect(screen.getByText(productDefault.brand)).toBeInTheDocument();
    expect(screen.getByText(productDefault.description)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: productDefault.title })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "descrição do produto" })).toBeInTheDocument();
  });
  it("should render ProductDescription component without discount", () => {
    renderProductDescription(productWithoutDiscount);

    expect(screen.queryByText("50%")).not.toBeInTheDocument();
    expect(screen.queryByText("$125.00")).not.toBeInTheDocument();
    expect(screen.getByText("$250.00")).toBeInTheDocument();
  });
});

describe("<ProductDescription /> snapshots", () => {
  it("should match snapshot", () => {
    const { container } = renderProductDescription();
    expect(container.firstChild).toMatchSnapshot();
  });
  it("should match snapshot of product description without discount", () => {
    const { container } = renderProductDescription(productWithoutDiscount);
    expect(container.firstChild).toMatchSnapshot();
  });
});
