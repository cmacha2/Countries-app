import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { getCountriesDetails } from '../../Redux/actions';
import Themes from '../Theme/Themes';
import Activity from './Activity';
import { Container , ContainerActivities, ContainerActivity, ContainerDetails, WrapperDetails } from './Details.css';

export default function Details() {
    const theme = useSelector(state => state.theme);
    const countriesDetails = useSelector(state => state.countriesDetails);
    const {id}  = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getCountriesDetails(id))
    }, []);

  return (
    <ThemeProvider theme={Themes[theme ? 'dark' : 'light']}>
    <WrapperDetails>
    <ContainerDetails>
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
      </ContainerDetails>
      <ContainerActivities>
     { countriesDetails.Activities?.map(act => <Activity key={act.name} act={act}/>)}
     </ContainerActivities>
     </WrapperDetails>
     </ThemeProvider>
    )  
}
