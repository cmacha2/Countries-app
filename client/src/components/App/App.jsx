import React from "react";
import { useSelector } from "react-redux";
import Cards from "../Cards/Cards.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import Themes from "../Theme/Themes.js";
import { ThemeProvider } from "styled-components";
import OptionBar from "../OptionBar/Options.jsx";
import { GlobalStyle } from "../../GlobalStyled.jsx";

export default function App() {
  const theme = useSelector(state => state.theme);
  return (
    <ThemeProvider theme={Themes[theme ? 'dark' : 'light']}>
         <GlobalStyle/>

         <NavBar />

      <OptionBar />

      <Cards />
      {/* <GlobalChatBot/> */}
        </ThemeProvider>
  );
}
