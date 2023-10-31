import { StyledApp } from "./App.styles";
import Header from "./components/Header";
import Product from "./components/Product";
import { CartProvider } from "./contexts/CartContext";
import { ImageProductProvider } from "./contexts/ImageProductContext";

function App() {
  return (
    <StyledApp>
      <CartProvider>
        <Header />
        <main>
          <ImageProductProvider>
            <Product />
          </ImageProductProvider>
        </main>
      </CartProvider>
    </StyledApp>
  );
}

export default App;
