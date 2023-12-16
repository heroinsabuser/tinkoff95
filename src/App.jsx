import "./App.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import original from "react95/dist/themes/original";
import white from "react95/dist/themes/white";
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import Header from "./components/Header/Header";
import MainPage from "./components/Pages/MainPage";

const GlobalStyles = createGlobalStyle`
 
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={white}>
        <Header />
        <MainPage/>
        </ThemeProvider>
    </>
  );
}

export default App;
