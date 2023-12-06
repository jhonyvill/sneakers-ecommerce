import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../../.jest/utils";
import { CartProvider } from "../../contexts/CartContext";
import Header from "./";

function renderHeader() {
  return renderWithTheme(
    <CartProvider>
      <Header />
    </CartProvider>
  );
}

jest.mock("../../hooks/useMedia", () => ({
  __esModule: true,
  useMedia: () => {
    return false;
  },
}));

describe("<Header />", () => {
  it("should render Header component", () => {
    const { getByTestId } = renderHeader();

    expect(getByTestId("logo-svg")).toBeInTheDocument();
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('region', {name: "carrinho de compras"})).toBeInTheDocument();
    expect(screen.getByRole('img', {name: "imagem de perfil"})).toBeInTheDocument();
  });
});

describe("<Header /> snapshots", () => {
  it("should match snapshot", () => {
    const { container } = renderHeader();
    expect(container.firstChild).toMatchSnapshot();
  });
});

