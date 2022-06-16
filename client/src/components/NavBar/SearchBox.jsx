import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getCountries, getCountriesMatch } from '../../Redux/actions';
import { useDebounce } from '../hooks/useDebounce';
import useQuery from '../hooks/useQuery';
import { ContainerSearch } from './SearchBox.css'

export const SearchBox = () => {
    const [flag, setFlag] = useState(false);
    const [country, setCountry] = useState("");
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
  

  return (
    <ContainerSearch switch={flag}>
    <div className="search">
      <div className="icon" onClick={()=>setFlag(!flag)}></div>
      <div className="input">
      <form type="submit">
      <input
      className="searchInput"
        type="text"
        value={country}
        onChange={onChange}
        placeholder="Search..."
      />
    </form>
    <span className="clear" onClick={()=>setCountry('')}></span>
      </div>
   
    </div>
    </ContainerSearch>
  )
}
