import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getCountries, getCountriesMatch } from '../../Redux/actions';
import Card from './Card'


function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function Cards() {
  const countries = useSelector(state => state.countries);
  const dispatch = useDispatch();
  const query = useQuery()
  const search = query.get('name')

  useEffect(() => {
    search ? dispatch(getCountriesMatch(search)) : dispatch(getCountries())
  }, [search]);
  
  return (
    <>
      
    { countries?.map(country =>  <Card key={country.id} country={country} />)} 
    </>
  )
}