import { StyledApp } from "./App.styles";
import Header from "./components/Header";
import Product from "./components/Product";

function App() {
  return (
    <StyledApp>
      <Header />
      <main>
        <Product />
      </main>
    </StyledApp>
  );
}

export default App;
