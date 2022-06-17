import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllActivies, getCountries, getCountriesSort, getFilterActivities, showAllActivies } from "../../Redux/actions";
import { ContainerMenu, Options, Selectors } from "./OptionSelect.css";

export default function FilterByActivities() {
  const [nameActivity, setNameActivity] = useState('');
  const dispatch = useDispatch(); 
  const allActivities = useSelector(state => state.allActivities);

  const onChange = (e) => {
    setNameActivity(e.target.value);
  };

  useEffect(() => {
     dispatch(showAllActivies())
  }, []);

  useEffect(() => {
    //   console.log(sort)
    // Object.entries(sort).length && dispatch(getCountriesSort(sort))
    //   : dispatch(getCountries());
    // Object.entries(nameActivity).length &&  dispatch(getFilterActivities(nameActivity))
    if(nameActivity==='allCountries')dispatch(getCountries()) 
    if(nameActivity==='allActivities')dispatch(getAllActivies()) 
    if(nameActivity!=='allCountries'&&nameActivity!=='') dispatch(getFilterActivities(nameActivity)) 
  }, [nameActivity]);

  return (
     <ContainerMenu>
     <Selectors  name="activities" id="activities" className="select" onChange={onChange}>
        <Options value={'allCountries'} >Filter by Activities</Options>
        <Options value={'allActivities'}>All containt Activities</Options>
        { allActivities && allActivities?.map((act)=><Options key={act.id} value={act.name}>{act.name}</Options>)}
    </Selectors>
    </ContainerMenu>
  );
}