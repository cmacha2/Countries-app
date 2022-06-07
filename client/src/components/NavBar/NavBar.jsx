import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { getCountries, getCountriesMatch } from '../../Redux/actions';


export default function NavBar() {
    const [country, setCountry] = useState('');
    const history = useHistory();

  
  
  const onSubmit = (e)=>{
    e.preventDefault()
    history.replace(`?name=${country}`)
    setCountry('')
  }
  return (
    <>
      <form action="get" type="submit">
        <input type="text" id="country" value={country} onChange={(e)=>setCountry(e.target.value)}/>
        <button type="submit" onClick={onSubmit}>buscar</button>
        </form> 
    </>
  )
}
