import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesSort } from "../../Redux/actions";
import { ContainerMenu } from "./FilterByActivities.css";

export default function SortByPopulation() {
  const [sort, setSort] = useState({});
  const dispatch = useDispatch();

  const onChange = (e) => {
    setSort({
      id: e.target.value,
      value: e.target.value,
    });
  };

  useEffect(() => {
      console.log(sort)
    Object.entries(sort).length && dispatch(getCountriesSort(sort))
    //   : dispatch(getCountries());
  }, [sort]);

  return (
    <>
     <ContainerMenu>
    <select name="Continents" id="Continents" className="select" onChange={onChange}>
        {/* <option disabled selected></option> */}
        <option value="">Sort by Population</option>
        <option value="sortPopulation-a-z">Highest to lowest</option>
        <option value="sortPopulation-z-a">Smallest to largest</option>
    </select>
    </ContainerMenu>
    </>
  );
}