import React from 'react'
import { ContainerIMG, Wrapper } from './NavBar.css'
import ligthLogo from "../LandingPage/travelWorld.png"
import darkLogo from "../LandingPage/darklogo.png"
import { useHistory } from 'react-router-dom'
import Switch from '../Switch/Switch';
import { useSelector } from 'react-redux'
import { SearchBox } from './SearchBox'

export default function NavBar() {
  const history = useHistory();
  const theme = useSelector(state => state.theme);
  return (
    <Wrapper>
      <ContainerIMG>
      <img src={theme ? ligthLogo : darkLogo} className="logo" onClick={()=> history.replace("/home")} width={80} alt="travel"/>
      </ContainerIMG>
      <SearchBox/>
      <Switch/>
    </Wrapper>
  )
}

