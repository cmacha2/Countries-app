import React, { useState } from "react";
import { useSelector } from "react-redux";
import Cards from "../Cards/Cards.jsx"
import FormActivity from "../FormActivity/FormActivity.jsx";
import NavBar from "../NavBar/NavBar";
import Wrapper from "../Wrapper/Wrapper.jsx";

const ITEMS_FOR_PAGE = 10;

export default function App() {
  const countries = useSelector(state => state.countries);
  const [localCountries, setLocalCountries] = useState(countries);


  const prevHandler=()=>{
    console.log('prev')
  }
  const nextHandler=()=>{
    console.log('next')
  }

  return (
      <div>
        
        <NavBar/>
        {/* <Cards localCountries={localCountries} prevHandler={prevHandler} nextHandler={nextHandler}/> */}
        {/* <Wrapper/> */}
      </div>
  );
}
