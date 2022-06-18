import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import { ButtonEnter, Container, ContainerSocialMedia, ContainerWelcome, ImgLogo, ImgSocialMedia, VideoScreen } from "./LandingPage.css";
import videoBg from "./back.mkv"
import travelWorld from "./travelWorld.png"
import { useState } from "react";
import linkedlin from "./linkedlin.png"
import github from "./github.png"


export default function LandingPage() {
  const [flag, setFlag] = useState(false);
  const history = useHistory();
 
  useEffect(() => {
    setTimeout(()=>{
      setFlag(true)
    },6000)
  }, []);

  return (
    <Container>
        <VideoScreen src={videoBg} autoPlay loop muted ></VideoScreen>
        {flag && <ContainerWelcome>
    <ImgLogo src={travelWorld} width={250} onClick={()=> history.replace("/home") } alt="travel"/>
    <ButtonEnter id='welcomeButton' onClick={()=> history.replace("/home")}>Welcome</ButtonEnter>
    </ContainerWelcome> }

        <ContainerSocialMedia> 
        <ImgSocialMedia src={linkedlin} width={50} onClick={()=>  window.open('https://www.linkedin.com/in/cristian-machado-%E2%9C%B0-0a2bba204/', '_blank') } alt="linkedlin" />
        <ImgSocialMedia src={github}  width={55} alt="github"  onClick={()=>   window.open('https://github.com/cmacha2','_blank') }/>
        </ContainerSocialMedia> 
    </Container>
  );
}



