import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllActivies, getCountries, getCountriesSort, getFilterActivities, showAllActivies } from "../../Redux/actions";
import { ContainerMenu, Options, Selectors } from "./OptionSelect.css";

export default function FilterByActivities() {
  const [nameActivity, setNameActivity] = useState('');
  const dispatch = useDispatch(); 
  const allActivities = useSelector(state => state.allActivities);
  if (!allActivities.length)dispatch(showAllActivies());

  const onChange = (e) => {
    setNameActivity(e.target.value);
  };

  useEffect(() => {
     dispatch(showAllActivies())
  }, []);

  useEffect(() => {
    if(nameActivity==='allCountries')dispatch(getCountries()) 
    if(nameActivity==='allActivities')dispatch(getAllActivies()) 
    if(nameActivity!=='allCountries'&&nameActivity!=='') dispatch(getFilterActivities(nameActivity)) 
  }, [nameActivity]);


  
  return (
     <ContainerMenu>
     <Selectors  name="activities" id="activities" onChange={onChange}>
        <Options value={'allCountries'} >Filter by Activities</Options>
        <Options value={'allActivities'}>All containt Activities</Options>
        {allActivities.length && allActivities?.map((act)=><Options key={act.id} value={act.name}>{act.name}</Options>)}
    </Selectors>
    </ContainerMenu>
  );
}