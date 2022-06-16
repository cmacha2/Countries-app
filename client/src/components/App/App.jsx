import React, { useState } from "react";
import { useSelector } from "react-redux";
import Cards from "../Cards/Cards.jsx"
import { Loading } from "../Loanding/Loading.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import Themes from "../Theme/Themes.js";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import OptionBar from "../OptionBar/Options.jsx";

import ButtonMsg from "../ChatBot/ButtonMsg.jsx";

export default function App() {
  const theme = useSelector(state => state.theme);
  return (
      <ThemeProvider theme={Themes[theme ? 'dark' : 'light']}>
        <ContainerApp>
        <NavBar/>
        <OptionBar/>
         <Cards/>
         <ButtonMsg className="button-chat"/>
         </ContainerApp>
      </ThemeProvider>
  );
}

const ContainerApp = styled.div`
  background: ${({theme})=> theme.bgc};
  color: ${({theme})=> theme.text};
  /* height: 200vh; */
  /* overflow: hidden; */
  .button-chat{
    display: flex;
    justify-content: flex-end;
  }
`