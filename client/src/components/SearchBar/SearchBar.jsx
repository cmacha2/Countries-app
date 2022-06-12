import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import SortByPopulation from "../OptionSelections/SortByPopulation";
import SortByName from "../OptionSelections/SortByName";
import FilterByContinent from "../OptionSelections/FilterByContinent";
import FilterByActivities from "../OptionSelections/FilterByActivities";
import { Container } from "./SearchBar.css";
import useQuery from "../hooks/useQuery";
import { getCountries, getCountriesMatch } from "../../Redux/actions";
import { useDebounce } from "../hooks/useDebounce";

export default function SearchBar() {
  const [country, setCountry] = useState("");
  const [flag, setFlag] = useState(false);
  const history = useHistory(); 
  const query = useQuery()
  const search = query.get('name')
  const dispatch = useDispatch();
  const [continent, setContinent] = useState({});

  const debouncedSearch =  useDebounce(search, 300)

useEffect(() => {
  search ? dispatch(getCountriesMatch(search)) : dispatch(getCountries())
}, [search]);

  const onSubmit = (e) => {
    e.preventDefault();
    // history.replace(`?name=${country}`);
  };

  useEffect(() => {
    history.replace()
  }, []);
  
  const onChange = (e)=>{
    setCountry(e.target.value)
    history.replace(`?name=${country}`);
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
          value={country}
          onChange={onChange}
          placeholder="Search..."
        />
        <input className="input-submit" type="submit" onClick={onSubmit}/>
      </form>
      {/* <button onClick={()=>dispatch(filterForContinent({id:'continente', value:'africa'}))}>Continente americano</button>  */}
  
      <FilterByContinent/>
      <SortByName/>
      <SortByPopulation/>
      <FilterByActivities/>
      <button type="submit" onClick={()=> history.replace(`/activities`)}>Create Activities</button>
    </Container>
  );
}
