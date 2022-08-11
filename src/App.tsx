import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import data from "../data.json";

const Title = styled.h1`
  color: ${(props) => props.theme.colors["purple-900"]};
  font-family: ${(props) => props.theme.fontFamily.baloo};
`;

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Title>Hello World</Title>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
