import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterForContinent, getCountries } from "../../Redux/actions";
import { ContainerMenu, Options, Selectors } from "./OptionSelect.css";


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
    <Selectors name="Continents" id="Continents" onChange={onChange}>
        <Options value="">Filter By Continents</Options>
        <Options value="Europe">Europe</Options>
        <Options value="North America">North America</Options>
        <Options value="South America">South America</Options>
        <Options value="Africa">Africa</Options>
        <Options value="Oceania">Oceania</Options>
        <Options value="Antarctica">Antarctica</Options>
    </Selectors>
    </ContainerMenu>
    </>
  );
}
