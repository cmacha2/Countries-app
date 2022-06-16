import React, { useState } from 'react'
import styled from 'styled-components';
import ChatBot from './ChatBot'


export default function ButtonMsg() {
    const [showComponent, setShowComponent] = useState(false);
  return (
    <Container shake={showComponent}>
        <div className='containerBtn'>
            <button className='btnMsg'onClick={()=>setShowComponent(!showComponent)}></button>
        </div>
        <div className='containerChat'>
            {showComponent ? <ChatBot showComponent={showComponent} setShowComponent={setShowComponent}/> : null}
        </div>
    </Container>
  )
}

const Container = styled.div`
   .containerBtn{
    /* position: absolute;
    bottom:0;
    right: 0;
    margin: 30px; */
    display:flex;
    align-items: flex-end;
    flex-direction: column;
    padding: 1.3rem;
    
       .btnMsg{
        background-image: url("https://images.vexels.com/media/users/3/135148/isolated/preview/da10190af5af2fd3278b4e9f5e8e5935-mensaje-letrero-plano-con-fondo-redondo.png"); 
        border-radius: 100%;
        background-color: #ffffff0f;
        background-size: cover;
        border: none;
        cursor: pointer;
        width: 4rem;
        height: 4rem;
        animation: shake 0.6s;
        animation-iteration-count: 3;
        &:hover{
          animation: shake 0.6s;
          animation-iteration-count:infinite;
        }
       }
       @keyframes shake {
        0% { transform: translate(1px, 1px) rotate(0deg); }
        10% { transform: translate(-1px, -2px) rotate(-1deg); }
        20% { transform: translate(-3px, 0px) rotate(1deg); }
        30% { transform: translate(3px, 2px) rotate(0deg); }
        40% { transform: translate(1px, -1px) rotate(1deg); }
        50% { transform: translate(-1px, 2px) rotate(-1deg); }
        60% { transform: translate(-3px, 1px) rotate(0deg); }
        70% { transform: translate(3px, 1px) rotate(-1deg); }
        80% { transform: translate(-1px, -1px) rotate(1deg); }
        90% { transform: translate(1px, 2px) rotate(0deg); }
        100% { transform: translate(1px, -2px) rotate(-1deg); }
        }
   }
   .containerChat{
    position: absolute;
    bottom:5rem;
    right: 3rem;
    margin: 30px;
    /* display:flex;
    align-items: flex-end;
    flex-direction: column; */
   }
   
`


