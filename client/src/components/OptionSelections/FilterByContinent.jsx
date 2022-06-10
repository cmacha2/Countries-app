import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterForContinent, getCountries } from "../../Redux/actions";
import { ContainerMenu } from "./FilterByContinent.css";

export default function FilterByContinent() {
  const [continent, setContinent] = useState({});
  const dispatch = useDispatch();

  const onChange = (e) => {
    setContinent({
      id: e.target.value,
      value: e.target.value,
    });
  };

  useEffect(() => {
    Object.entries(continent).length
      && dispatch(filterForContinent(continent))
      //  : dispatch(getCountries());
  }, [continent]);

  return (
    <>
    <ContainerMenu>
    <select name="Continents" id="Continents" className="select" onChange={onChange}>
        <option value="">Filter By Continents</option>
        {/* <option >All Countinents</option> */}
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Africa">Africa</option>
        <option value="Oceania">Oceania</option>
        <option value="Antarctica">Antarctica</option>
    </select>
    </ContainerMenu>
    </>
  );
}
