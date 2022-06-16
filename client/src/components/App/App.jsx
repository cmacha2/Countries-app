import React, { useState } from "react";
import { useSelector } from "react-redux";
import Cards from "../Cards/Cards.jsx"
import { Loading } from "../Loanding/Loading.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import SearchBar from "../SearchBar/SearchBar";
import Themes from "../Theme/Themes.js";
import { ThemeProvider } from "styled-components";
import Switch from "../Switch/Switch.jsx";
import styled from "styled-components";

export default function App() {
  const [localTheme, setLocalTheme] = useState('dark');
  const theme = useSelector(state => state.theme);
  console.log(theme)
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
  background-color: ${({theme})=> theme.bgc};
  color: ${({theme})=> theme.text};
  width: 100%;
`