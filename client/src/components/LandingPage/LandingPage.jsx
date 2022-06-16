import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import { getCountries } from "../../Redux/actions";
import FormActivity from "../FormActivity/FormActivity";
import background from './background.png'
import { Container, ImgFull } from "./LandingPage.css";
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
      {/* <div className="content-img">
        <img src={travelWorld} alt="travel"/>
      </div> */}
     
      <video src={videoBg} autoPlay loop muted></video>
      
      {/* <div className="background">
      <Link to={'/home'}>Ingresar</Link>
      </div> */}
    {flag && <div className="content">
    <img src={travelWorld} width={250} onClick={()=> history.replace("/home")} alt="travel"/>
         <button className="button-enter" onClick={()=> history.replace("/home")}>Welcome</button>
      <img src={linkedlin} className="linkedlin" width={50} onClick={()=>  window.open('https://www.linkedin.com/in/cristian-machado-%E2%9C%B0-0a2bba204/', '_blank') } alt="linkedlin" />
      <img src={github} className="github"  width={55} alt="github"  onClick={()=>   window.open('https://github.com/cmacha2','_blank') }/>
    </div>
    
    }
    
      
     
    </Container>
  );
}
