import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";
import { getCountries } from "../../Redux/actions";
import FormActivity from "../FormActivity/FormActivity";
import background from './world-background.png'
import { Container, ImgFull } from "./LandingPage.css";


export default function LandingPage() {
  
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(getCountries())
  // }, []);

  return (
    <Container>
    <ImgFull>
    <img src={background} height="70%" width="80%" alt="" /> 
    </ImgFull>
    
      <Link to={'/home'}>Ingresar</Link>
     
    </Container>
  );
}
