import React from "react";
import { useState,useEffect,useRef } from "react";
import styled from "styled-components";
// import Switch from "react-switch";
// import { IoMdSend,IoMdClose } from 'react-icons/io'
import { useDispatch, useSelector } from "react-redux";
import { addChatBotInfo, updateLoading } from "../../Redux/actions";
import msgProcessing, { msgWelcome } from "./bot";
import Messages from "./Menssages";

export default function ChatBot({showComponent,setShowComponent}) {
  const [input, setInput] = useState("");
  const [check, setCheck] = useState(true);
  const dispatch = useDispatch();
  const stateBot = useSelector(state => state.botInfo);
  const sLoadingMsg = useSelector(state => state.sLoadingMsg);
  //const msgWelcome = 'Hola bienvenidos al proyecto individual de Cristian Machado, en el cual estaremos trabajando con el api de robot y usamos tecnologias como react readux express nodejs'
 // mensaje de bienvenida se puede poner con un useEffect para cuando se monte el componente el bot envie el primer mensaje. ya despues implementar la logica.


const onSubmit = (e) => {
  e.preventDefault();
  if(input !==''){
    const data = {usuario:input,bot:msgProcessing(input)}
      dispatch(addChatBotInfo(data))
      setInput('')
  }
};
 const onChange = (e)=>{
   const valueInput = e.target.value
   setInput(valueInput)
 }

  return (
    <Container switch={check}>
      <div className="up-bar">
        {/* <Switch className="checked" onChange={(e)=>setCheck(e)} checked={check} onColor="#344d6c" offHandleColor="#232E3B" onHandleColor="#e4e4e4" handleDiameter={20} uncheckedIcon={false} checkedIcon={false} boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"  activeBoxShadow="0px 0px 1px  10px rgba(0, 0, 0, 0.2)" height={20}
        width={40}/> */}
        <label >Chat with us!</label>
        <div className="container-buttons">
          <button className="BtnClose" onClick={()=>setShowComponent(!showComponent)}>{/* <IoMdClose/> */}</button>
        </div>
      </div>
      <div className="chats">
        <div  className="msgContainer">
        {stateBot.length  && stateBot.map((msg,i) => <Messages key={i} index={i} check={check} msg={msg}/>)}
        </div >
      </div>
      <div className="classForm">
      <form onSubmit={onSubmit} >
        <input
          onChange={onChange}
          type="text"
          value={input}
          placeholder="Write a massage"
          usuario="usuario"
        />
        <button className="" type="submit">
         {/* <IoMdSend /> */}
        </button>
      </form> 
    </div>
    </Container>
  );
}

const Container = styled.div`
  background-color:${props => props.switch ?  "#232E3B" : "#598DA8"  }; // cambie esto para q haga swwitch
  width: 20.5rem;
  height: 34rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.7rem;
  .up-bar {
    display: flex;
    justify-content: space-between;
    padding: 5px;
   /*  border-bottom: 1px solid white; */
    &>label{
      color:${props => props.switch ? "#fbfbfb" : "#ffffff" };  //Agregue el color 
      font-family: sans-serif;
      font-size: 1.2rem;
    }
    .container-buttons{
      &>button{
        margin-left: 4px;
        width:1.5rem;
        height:1.5rem;
        color:white;
        background-color: #344d6c;
        border:white;
        border-radius: 0.4rem;
        cursor: pointer;
      }
    }
  }
  .chats{
    background-image:${props => props.switch ? 'url("https://i.pinimg.com/originals/c4/82/14/c4821433f0bb5ac2650e42a9ed06a382.jpg")' : 'url("https://media.istockphoto.com/vectors/gray-and-white-concrete-abstract-wall-texture-grunge-vector-full-vector-id1152874528?k=20&m=1152874528&s=170667a&w=0&h=RFjCNrtx0VQ-zH1-Jqj3Ys5rhpDyihFWzfNG4DScA_4=")'};
    width: 98%;
    height: 85%;
    border-radius: 1rem;
    padding:0;
    position: relative;
    margin: 0 auto;
    margin-bottom: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    .msgContainer{
       /* background-color: azure; */
      overflow: auto;
      overflow-x: hidden;
      scroll-behavior:  auto ;
      
    }
    .msgContainer::-webkit-scrollbar{
      width: 8px;
      background-color: #2E3338;
    }
    .msgContainer::-webkit-scrollbar-thumb{
      background-color: #202225;
      border-radius: 4px;
    }
  }
  .classForm{
    &>form{
      display:flex;
      &>input{
        width: 90%;
        height: 2rem;
        margin-left: 0.2rem;
        border-top-left-radius:0.5rem;
        border-bottom-left-radius:0.5rem;
        color:${props => props.switch ? "#FAFAFA" : "#181e25"};
        border:none;
        background-color:${props => props.switch ? "#181e25" : "#f2f2f294"};
        outline: none;
        word-wrap: word-break;
      }
      &>button{
        width: 8%;
        height: 2.13rem;
        margin-right: 0.2rem;
        border-top-right-radius:0.5rem;
        border-bottom-right-radius:0.5rem; 
        border:none;
        background-color: ${props => props.switch ? "#181e25" : "#f2f2f294"};
      }
    }
  }
  @media (max-height: 650px) {
    width: 19.5rem;
    height: 30rem;
}
`;





