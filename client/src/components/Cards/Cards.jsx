import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { getCountries, getCountriesMatch } from '../../Redux/actions';
import useQuery from '../hooks/useQuery';
import Card from './Card'




export default function Cards() {
  const countries = useSelector(state => state.countries);
  const dispatch = useDispatch();

  const query = useQuery()
  const search = query.get('name')

  useEffect(() => {
    search ? dispatch(getCountriesMatch(search)) : dispatch(getCountries())
  }, [search]);

  console.log(countries)
  return (
    <>
   { countries?.map(country =>  <Card key={country.id } country={country} />)}  
    </>
  )
}