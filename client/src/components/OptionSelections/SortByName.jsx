import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {  getCountriesSort } from "../../Redux/actions";
import { ContainerMenu, Options, Selectors } from "./OptionSelect.css";


export default function SortByName() {
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
    <Selectors name="byName" id="byName" onChange={onChange}>
        <Options value="">Sort by Name</Options>
        <Options value="sortName-a-z">By name A-Z</Options>
        <Options value="sortName-z-a">By name Z-A</Options>
    </Selectors>
    </ContainerMenu>
    </>
  );
}
