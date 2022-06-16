import React from 'react'
import { Container } from './NavBar.css'
import ligthLogo from "../LandingPage/travelWorld.png"
import darkLogo from "../LandingPage/darklogo.png"
import { useHistory } from 'react-router-dom'
import Switch from '../Switch/Switch';
import { useSelector } from 'react-redux'

export default function NavBar() {
  const history = useHistory();
  const theme = useSelector(state => state.theme);
  return (
    <Container>
      <div className="content-img">
      <img src={theme ? ligthLogo : darkLogo} className="logo"  onClick={()=> history.replace("/home")} width={80} alt="travel"/>
      </div>
      <Switch className="switch"/>
    </Container>
  )
}

