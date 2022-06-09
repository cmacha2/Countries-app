import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { getCountries, getCountriesMatch } from '../../Redux/actions';
import useQuery from '../hooks/useQuery';
import Card from './Card'

export default function Cards(props) {
  const countries = useSelector(state => state.countries);
  const dispatch = useDispatch();
  // const [flag, setFlag] = useState(false);

  const query = useQuery()
  const search = query.get('name')
  /* if(search){
    setFlag(!flag)
  } */
  //un estado que sea falso y si search hay valor entonces el esta pasa a tru entonces solo ejecutaria el render cuando se busca y no cuando se monta .

  useEffect(() => {
    search && dispatch(getCountriesMatch(search)) /* : dispatch(getCountries())*/
  }, [search]);

  return (
    <>
   { countries?.map(country =>  <Card key={country.id } country={country} />)} 
   <div>
        <h3>Pagina : {props.currentPage}</h3>
        <button onClick={props.prevHandler}>Prev</button>
        <button onClick={props.prevHandler}>Prev</button>
    </div>
    </>
  )
}