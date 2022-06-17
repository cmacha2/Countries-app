import React, { useState } from "react";
import { useSelector } from "react-redux";
import Cards from "../Cards/Cards.jsx"
import NavBar from "../NavBar/NavBar.jsx";
import Themes from "../Theme/Themes.js";
import { ThemeProvider } from "styled-components";
import OptionBar from "../OptionBar/Options.jsx";

import ButtonMsg from "../ChatBot/ButtonMsg.jsx";
import { ContainerApp, ContainerButtonChatBot } from "./App.css.js";
import { GlobalStyle } from "../../GlobalStyled.jsx";

export default function App() {
  const theme = useSelector(state => state.theme);
  return (
      <ThemeProvider theme={Themes[theme ? 'dark' : 'light']}>
        <GlobalStyle/>
        <ContainerApp>
        <NavBar/>
        <OptionBar/>
         <Cards/>
         <ContainerButtonChatBot>
        <ButtonMsg />
        </ContainerButtonChatBot>
         </ContainerApp>
      </ThemeProvider>
  );
}

