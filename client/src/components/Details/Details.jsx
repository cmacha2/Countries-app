import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getCountriesDetails } from '../../Redux/actions';

export default function Details() {
    const countriesDetails = useSelector(state => state.countriesDetails);
    const {id}  = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getCountriesDetails(id))
    }, []);
    console.log(countriesDetails.Activities)

  return (
    <div>
         <h1>Detalles</h1>
         <h2>{countriesDetails.name}</h2>
         <span>{countriesDetails.capital}</span>
         <span>{countriesDetails.subregion}</span>
         <span>{countriesDetails.continent}</span>
         <span>{countriesDetails.area}</span>
         <span>{countriesDetails.population}</span>
        <img src={countriesDetails.img} width={200} alt={countriesDetails.name} />
        {  countriesDetails.Activities?.map(act => <div>
            <span>{act.name}</span>
         <span>{act.difficulty}</span>
         <span>{act.duration}</span>
         <span>{act.season}</span>
        </div>) }
        <button onClick={()=>history.replace(`/home`)}>Back</button>
    </div>
  )
}
