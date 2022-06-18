import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesSort } from "../../Redux/actions";
import { ContainerMenu, Options, Selectors } from "./OptionSelect.css";


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
    Object.entries(sort).length && dispatch(getCountriesSort(sort))
  }, [sort]);

  return (
    <>
     <ContainerMenu>
    <Selectors name="Continents" id="Continents" onChange={onChange}>
        <Options value="">Sort by Population</Options>
        <Options value="sortPopulation-a-z">Highest to lowest</Options>
        <Options value="sortPopulation-z-a">Smallest to largest</Options>
    </Selectors>
    </ContainerMenu>
    </>
  );
}