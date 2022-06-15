import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getCountriesDetails } from '../../Redux/actions';
import Activity from './Activity';
import { Container , ContainerActivities, ContainerActivity } from './Details.css';

export default function Details() {
    const countriesDetails = useSelector(state => state.countriesDetails);
    const {id}  = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getCountriesDetails(id))
    }, []);

  return (
    <>
    <Container>
      <div className='card'>
        <div className='circle'>
          <img src={countriesDetails.img} alt={countriesDetails.name} />
        </div>

        <div className='content'>
        <h2>{countriesDetails.name}</h2>
         <span>ISO3: {countriesDetails.id}</span>
         <span>Capital: {countriesDetails.capital}</span>
         <span>Subregion: {countriesDetails.subregion}</span>
         <span>Continent: {countriesDetails.continent}</span>
         <span>Area: {countriesDetails.area} km2</span>
         <span>Population: {countriesDetails.population}</span><br />
       
        </div>

      </div>
      <button className='back-button' onClick={()=>history.replace(`/home`)}>Back</button> 
      </Container>
      <ContainerActivities>
     { countriesDetails.Activities?.map(act => <Activity key={act.name} act={act}/>)}
     </ContainerActivities>
    </>
    )  
}
