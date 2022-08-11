import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import data from "../data.json";
import { Header } from "./components/Header";
import { Index } from "./pages/Index";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Index />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
