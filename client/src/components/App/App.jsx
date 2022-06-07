import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, getCountriesMatch, postActivity } from "../../Redux/actions";
import Cards from "../Cards/Cards.jsx";


export default function App() {
  const [country, setCountry] = useState('');
  const countriesMatch = useSelector(state => state.countriesMatch);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries())
  }, []);

const onChange=(e)=>{
  setCountry(e.target.value)
}
const onSubmit = (e)=>{
  e.preventDefault()
  // dispatch(getCountriesMatch())
}


  return (
      <div>
        <form action="get" type="submit">
        <input type="text" id="country" value={country} onChange={onChange}/>
        <button type="submit" onClick={onSubmit}>buscar</button>
        </form> 
        <Cards/>
      </div>

  );
}
