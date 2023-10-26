import { StyledApp } from "./App.styles";
import Header from "./components/Header";
import Product from "./components/Product";
import { ImageProductProvider } from "./contexts/ImageProductContext";

function App() {
  return (
    <StyledApp>
      <Header />
      <main>
        <ImageProductProvider>
          <Product />
        </ImageProductProvider>
      </main>
    </StyledApp>
  );
}

export default App;
