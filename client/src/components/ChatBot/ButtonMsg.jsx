import React, { useState } from "react";
import styled from "styled-components";
import ChatBot from "./ChatBot";

export default function ButtonMsg() {
  const [showComponent, setShowComponent] = useState(false);
  return (
    <TODO>
       <ContainerChat>
        {showComponent&&(
          <ChatBot
            showComponent={showComponent}
            setShowComponent={setShowComponent}
          />
        ) }
        </ContainerChat> 


        <ContainerButton>
        <Button
          shake={showComponent}
          id="chatbotMainButton"
          className="btnMsg"
          onClick={() => setShowComponent(!showComponent)}
        ></Button>
      </ContainerButton>
      
    </TODO>
  );
}

// 

const TODO = styled.div`

/* background-color: red; */
 display: flex;
justify-content: flex-end;
 padding-right: 1rem;

 position: fixed; 
top: 0;
right: 4rem;
padding: 1rem;

@media (min-height: 620px) {
  top: 9%;
  }

  @media only screen and (min-height:830px) and (max-height:900px){
  top: 2%;
  right: 3.5rem;
  }

@media only screen and (min-width:1680px) and (max-width:1780px){
  top: 42%;
  right: 3.5rem;
  }
  
  @media only screen and (min-width:1838px) and (max-width:2200px){
    top: 30%;
    right: 3.5rem;
  }

  @media only screen and (min-width:1650px) and (max-width:2300px){
    top:31%;
    right: 3.5rem;
  }
 
/* @media (min-width: 1500px) {
  top: 20%;
  right: 3.5rem;
  } */
/* position: fixed;  */

/* @media (height: 974px) {
 top: 5rem;
right: 0;
padding: 0;
} */
/* @media only screen and (max-height: 980px) {
  top: 3.5rem;
  right: 1rem;
  padding: 0;
  } */

  /* @media only screen and (max-height: 1527px) {
    top: 17rem;
right: 0;
padding: 1rem;
  } */
`

const ContainerButton = styled.div`
 position: fixed; 
top: 85%;
right: 0;
padding: 1rem;
background:transparent;

@media (min-width: 1636px) {
  top: 90%;
  }
  /* display: flex;
  align-items: flex-end; */
  /* position: fixed; 
  top: 51rem; */
  /* background-color: black; */
  /* padding-top: 2rem; */
  display: flex;
  align-items: flex-end;
  
`;

const ContainerChat = styled.div`
/* position: absolute;
top: 85%;
left: 5%;
right: 4rem; */


  /* position: absolute;
  bottom: 5rem;
  right: 3rem;
  margin: 30px; */  


/* position: absolute; 
top: 7rem;
right: 5rem;
padding-bottom:5rem;
padding-right: 0rem; */
/* position: absolute; 
botton: 25rem;
right: 5rem;
padding-bottom:5rem;
padding-right: 0rem; */


`;

const Button = styled.button`
  background-image: url("https://i.postimg.cc/fL1VrhRk/chatbot-notification-glyph-icon-chat-bot-face-with-exclamation-mark-important-message-virtual-assist.png");
  background-color: transparent;
  background-size: cover;
  border: none;
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  animation: shake 0.6s;
  animation-iteration-count: 3;
  &:hover {
    animation: shake 0.6s;
    animation-iteration-count: infinite;
  }
  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }
`;


