import { StyledApp } from "./App.styles";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Product from "./components/Product";
import { CartProvider } from "./contexts/CartContext";
import { ImageProductProvider } from "./contexts/ImageProductContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <StyledApp>
        <CartProvider>

          <Header />
          <main>
          <Routes>
            <Route path="/" element={
              <ImageProductProvider>
                <Product />
              </ImageProductProvider>
            } />
            <Route path="/collections" element={<NotFound />} />
            <Route path="/men" element={<NotFound />} />
            <Route path="/women" element={<NotFound />} />
            <Route path="/about" element={<NotFound />} />
            <Route path="/contact" element={<NotFound />} />
          </Routes>
          </main>
          
        </CartProvider>
      </StyledApp>
    </Router>
  );
}

export default App;
