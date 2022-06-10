import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { getCountries, getCountriesMatch, setCurrentPage } from '../../Redux/actions';
import useQuery from '../hooks/useQuery';
import { Loading } from '../Loanding/Loading';
import Card from './Card'
import { Container } from './Cards.css';

const ITEMS_FOR_PAGE = 10;

export default function Cards() {
  const countries = useSelector(state => state.countries);
  const currentPage = useSelector(state => state.currentPage)
  const query = useQuery()
  const search = query.get('name')
  const dispatch = useDispatch();

  const filterCountries=()=>{
    if(currentPage===0){
      return countries.slice(currentPage,currentPage+9)
    }
    return countries.slice(currentPage,currentPage+ITEMS_FOR_PAGE)
  }
  const currentContries = filterCountries()

  const nextPage = ()=>{
    dispatch(setCurrentPage(currentPage+ITEMS_FOR_PAGE))
  }
  const prevPage = ()=>{
    if(currentPage>0)
    dispatch(setCurrentPage(currentPage-ITEMS_FOR_PAGE))
  }

  useEffect(() => {
    search ? dispatch(getCountriesMatch(search)) : dispatch(getCountries()) 
  }, [search]);

  return (
    <Container>
    <div className='buttonPages'>
        <button disabled={currentPage===0} onClick={prevPage}>Prev</button>
        <button disabled={currentContries.length<9 || currentPage===240} onClick={nextPage}>Next</button>
  </div>
    {!countries.length && <Loading/>}
   {  currentContries?.map(country =>  <Card key={country.id} country={country} />)} 
   
    </Container>
  )
}