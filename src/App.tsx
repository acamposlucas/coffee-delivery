import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Header } from "./components/Header";
import { Index } from "./pages/Index";
import { Route, Routes } from "react-router-dom";
import { Checkout } from "./pages/Checkout";
import { Success } from "./pages/Success";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <Routes>
          <Route index element={<Index />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="success" element={<Success />} />
        </Routes>
        <GlobalStyle />
      </ThemeProvider>
    </ShoppingCartProvider>
  );
}

export default App;
