import React from 'react'
import { Container } from './NavBar.css'
import travelWorld from "../LandingPage/travelWorld.png"
import { useHistory } from 'react-router-dom'
import Switch from '../Switch/Switch';

export default function NavBar() {
  const history = useHistory();
  return (
    <Container>
      <div className="content-img">
      <img src={travelWorld} className="logo"  onClick={()=> history.replace("/home")} width={80} alt="travel"/>
      </div>
      <Switch className="switch"/>
    </Container>
  )
}

