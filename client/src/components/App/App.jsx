import React, { useState } from "react";
import { useSelector } from "react-redux";
import Cards from "../Cards/Cards.jsx"
import { Loading } from "../Loanding/Loading.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import SearchBar from "../SearchBar/SearchBar";
import Themes from "../Theme/Themes.js";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

export default function App() {
  const theme = useSelector(state => state.theme);
  return (
      <ThemeProvider theme={Themes[theme ? 'dark' : 'light']}>
        <ContainerApp>
        <NavBar/>
        <SearchBar/>
         <Cards/>
         </ContainerApp>
      </ThemeProvider>
  );
}

const ContainerApp = styled.div`
  height: 100vh;
  background: ${({theme})=> theme.bgc};
  color: ${({theme})=> theme.text};

`