import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import SortByPopulation from "../OptionSelections/SortByPopulation";
import SortByName from "../OptionSelections/SortByName";
import FilterByContinent from "../OptionSelections/FilterByContinent";
import FilterByActivities from "../OptionSelections/FilterByActivities";
import { Container } from "./SearchBar.css";

export default function SearchBar() {
  const [country, setCountry] = useState("");
  const [flag, setFlag] = useState(false);
  const history = useHistory(); 
  const dispatch = useDispatch();
  const [continent, setContinent] = useState({});

// const timer = useRef(null)
    
// useEffect(() => {
//     function searchQuery(){
//         clearTimeout(timer.current)
//     timer.current = setTimeout(() => {
//         history.replace(`?name=${country}`)
//     },500)
//    }
//    console.log(history.location.search)
//    if(history.location.search=== "?name="){
//     history.replace("/")
//    }
//    country && searchQuery()
// },[country])

  const onSubmit = (e) => {
    e.preventDefault();
    history.replace(`?name=${country}`);
  };
  const onChange = (e)=>{
    setCountry(e.target.value)


    // clearTimeout(timer.current)
    //     timer.current = setTimeout(() => {
    //         history.replace(`?name=${country}`)
    //     },1000)


    // setTimeout(()=>{
    //     history.replace(`?name=${country}`) //----------------------------->>> AQUI se me queda atras una letra el query osea cuando borro siempre queda una letra.... recutificar
    // },1500)
    }


//   useEffect(() => {
//        Object.entries(continent).length ? dispatch(filterForContinent(continent)) : dispatch(getCountries())
//        console.log(continent)
//   }, [continent]);
 
  return (
    <Container>
      <form action="get" type="submit">
        <input
        className="input-search"
          type="text"
          id="country"
          value={country}
          onChange={onChange}
        />
        <input className="buttonSearch" type="submit" onClick={onSubmit}/>
      </form>
      {/* <button onClick={()=>dispatch(filterForContinent({id:'continente', value:'africa'}))}>Continente americano</button>  */}
  
      <FilterByContinent/>
      <SortByName/>
      <SortByPopulation/>
      <FilterByActivities/>
    </Container>
  );
}
