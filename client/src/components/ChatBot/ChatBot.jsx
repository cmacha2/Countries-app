import React from "react";
import { useState,useEffect,useRef } from "react";
import styled from "styled-components";
// import Switch from "react-switch";
// import { IoMdSend,IoMdClose } from 'react-icons/io'
import { useDispatch, useSelector } from "react-redux";
import { addChatBotInfo, filterForContinent, getAllActivies, getCountries, getCountriesMatch, getCountriesSort, getFilterActivities, switchTheme, updateLoading } from "../../Redux/actions";
import Messages from "./Menssages";

export default function ChatBot({showComponent,setShowComponent}) {
  const theme = useSelector(state => state.theme);
  const allActivities = useSelector(state => state.allActivities);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const stateBot = useSelector(state => state.botInfo);
  const sLoadingMsg = useSelector(state => state.sLoadingMsg);
  //const msgWelcome = 'Hola bienvenidos al proyecto individual de Cristian Machado, en el cual estaremos trabajando con el api de robot y usamos tecnologias como react readux express nodejs'
 // mensaje de bienvenida se puede poner con un useEffect para cuando se monte el componente el bot envie el primer mensaje. ya despues implementar la logica.
 function msgProcessing(input){
  const msgLowerCase = input.toLowerCase();
  if(msgLowerCase.includes('continuar')) return 'entro'// req.history para ir a la siguiente pagina o close para cerrar la pestana o sino con link envio una respuesta y si matchea link a la proxima
  if(msgLowerCase.includes('hola') || msgLowerCase.includes('hi') || msgLowerCase.includes('buenas') || msgLowerCase.includes('que tal') || msgLowerCase.includes('buen dia') || msgLowerCase.includes('good morning') || msgLowerCase.includes('hello')) return 'Hola que tal bienvenido al Proyeccto individual de Cristian Machado para mas informacion teclear /mas informacion '
  // 
  if(msgLowerCase.includes('information') || msgLowerCase.includes('informacion')) return `How can we help you, if you want to order or filter the countries we are at your disposal, simply write order or filter. We can also do a country search , just type " Search " and the name of the country`
  if(msgLowerCase.includes('sort') || msgLowerCase.includes('organize')  || msgLowerCase.includes('organizar') || msgLowerCase.includes('ordenar')) return "We need you to provide us how you want to order them. Less populated, more populated. Alphabetically by name from A-Z or Z-A"
  if(msgLowerCase.includes('a-z')){
    dispatch(getCountriesSort({id: "sortName-a-z",value: "sortName-a-z",}))
   return "Successful "
  }
  if(msgLowerCase.includes('z-a')){
    dispatch(getCountriesSort({id: "sortName-z-a",value: "sortName-z-a",}))
   return "Successful "
  }
  if(msgLowerCase.includes('less')){
    dispatch(getCountriesSort({id: "sortPopulation-z-a",value: "sortPopulation-z-a",}))
   return "Successful "
  }
  if(msgLowerCase.includes('more')){
    dispatch(getCountriesSort({id: "sortPopulation-a-z",value: "sortPopulation-a-z",}))
   return "Successful "
  }
  if(msgLowerCase.includes('change mode')){
    dispatch(switchTheme(!theme)) 
    return "Theme change successful"
  }  
  if(msgLowerCase.includes('filter') || msgLowerCase.includes('filtrar'))return `We need you to provide us with the filter options, by activities, if you want all type all the activities or if you want any of the following specifically ( ${allActivities.map(x=>' '+x.name)}) or maybe you want to filter by continent type the name of the continent`

  var activityType = allActivities.filter(x=>x.name.toLowerCase().includes(msgLowerCase))
  if(activityType.length){
    console.log(msgLowerCase)
    dispatch(getFilterActivities(msgLowerCase)) 
    return "Successful, showing all countries with activity "+msgLowerCase 
  }
  if(msgLowerCase.includes('activities')){
  dispatch(getAllActivies()) 
  return "Successful, showing all countries with activity "
 }
 if(msgLowerCase.includes('all continents')){
  dispatch(getCountries()) 
  return "Successful, showing all countries "
}
 if(msgLowerCase.includes('continents')){
  return "Type one of the following continents Europe, North America, South America, Africa, Oceania, Antarctica or just type all continents for all countries in the world"
 }

 let continent = ['Europe', 'North America', 'South America', 'Africa', 'Oceania', 'Antarctica'].filter(x=>x.toLowerCase().includes(msgLowerCase))
 if(continent.length){
  continent = continent.join('')
  dispatch(filterForContinent({id:continent,value: continent})) 
  return "Successful, showing all countries of "+continent
}
if(msgLowerCase.includes('search')){
  let search = msgLowerCase.split(' ').slice(1).join(' ')
  dispatch(getCountriesMatch(search)) 
  return "Successful, showing all countries that containt "+search
}

 if(msgLowerCase)return `Disculpe actualmente no podemos ayudarlo con nada mas`
}


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
    <Container switch={theme}>
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
        {stateBot.length  && stateBot.map((msg,i) => <Messages key={i} index={i} check={theme} msg={msg}/>)}
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
  background-color:${props => props.switch ?  "#232E3B" : "#97a6ae"  }; // cambie esto para q haga swwitch
  width: 20.5rem;
  height: 34rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.7rem;
  box-shadow: 5px 5px 5px rgba(0,0,0,0.3);
  .up-bar {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    padding-top: 0.3rem;
    padding-left: 2rem;
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
    background-color:${props => props.switch ? " #2B3743;" : "#f7f7f7" };
    /* box-shadow: 5px 5px 5px rgba(0,0,0,0.3); */
    /* background-image:${props => props.switch ? 'url("https://i.pinimg.com/originals/c4/82/14/c4821433f0bb5ac2650e42a9ed06a382.jpg")' : 'url("https://media.istockphoto.com/vectors/gray-and-white-concrete-abstract-wall-texture-grunge-vector-full-vector-id1152874528?k=20&m=1152874528&s=170667a&w=0&h=RFjCNrtx0VQ-zH1-Jqj3Ys5rhpDyihFWzfNG4DScA_4=")'}; */
    width: 98%;
    height: 85%;
    border-radius: 0.5rem;
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
      padding-right: 10px;
      width: 8px;
      background-color:${props => props.switch ?  " #2E3338" :  " #908a8a92" };
      border-radius: 15px;
    }
    .msgContainer::-webkit-scrollbar-thumb{
      background-color: ${props => props.switch ?  " #2E3338" :  " #908a8a92" };
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
        height: 2rem;
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





