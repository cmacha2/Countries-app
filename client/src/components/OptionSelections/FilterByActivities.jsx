import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllActivies, getCountries, getCountriesSort, getFilterActivities } from "../../Redux/actions";
import { ContainerMenu } from "./SortByPopulation.css";

export default function FilterByActivities() {
  const [nameActivity, setNameActivity] = useState('');
  const dispatch = useDispatch(); 
  const allActivities = useSelector(state => state.allActivities);

  const onChange = (e) => {
    setNameActivity(e.target.value);
  };

  useEffect(() => {
     dispatch(getAllActivies())
  }, []);

  useEffect(() => {
    //   console.log(sort)
    // Object.entries(sort).length && dispatch(getCountriesSort(sort))
    //   : dispatch(getCountries());
    // Object.entries(nameActivity).length &&  dispatch(getFilterActivities(nameActivity))
    if(nameActivity==='allCountries'){
      dispatch(getCountries()) 
    }
    console.log(nameActivity)
    if(nameActivity!=='allCountries'&&nameActivity!=='') dispatch(getFilterActivities(nameActivity)) 
  }, [nameActivity]);

  return (
    <>
     <ContainerMenu>
     <select name="activities" id="activities" className="select" onChange={onChange}>
        <option value={'allCountries'} >Filter by Activities</option>
        { allActivities && allActivities?.map((act)=><option key={act.id} value={act.name}>{act.name}</option>)}
    </select>
    </ContainerMenu>
    </>
  );
}