import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { filterForContinent, getCountries, getCountriesMatch } from "../../Redux/actions";
import styled from "styled-components"
import SelectorContinent from "./SelectorContinent";
import Sort from "./Sort";

export default function NavBar() {
  const [country, setCountry] = useState("");
  const history = useHistory(); 
  const dispatch = useDispatch();
  const [continent, setContinent] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    history.replace(`?name=${country}`);
    setCountry("");
  };
//   const onChange = (e)=>{
//     setContinent({
//         id:e.target.value,
//         value:e.target.value
//     })
//   }


//   useEffect(() => {
//        Object.entries(continent).length ? dispatch(filterForContinent(continent)) : dispatch(getCountries())
//        console.log(continent)
//   }, [continent]);
 
  return (
    <>
      <form action="get" type="submit">
        <input
          type="text"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <button type="submit" onClick={onSubmit}>
          buscar
        </button>
      </form>
      {/* <button onClick={()=>dispatch(filterForContinent({id:'continente', value:'africa'}))}>Continente americano</button>  */}
  
      <SelectorContinent/>
      <Sort/>
    </>
  );
}
