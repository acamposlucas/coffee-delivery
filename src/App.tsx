import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Header } from "./components/Header";
import { Index } from "./pages/Index";
import { Route, Routes } from "react-router-dom";
import "./miragejs";
import { Checkout } from "./pages/Checkout";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Routes>
        <Route index element={<Index />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
