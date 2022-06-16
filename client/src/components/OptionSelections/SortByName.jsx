import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {  getCountriesSort } from "../../Redux/actions";
import { ContainerMenu } from "./OptionSelect.css";


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
    //   : dispatch(getCountries());
  }, [sort]);

  return (
    <>
     <ContainerMenu>
    <select name="byName" id="byName" className="select" onChange={onChange}>
        {/* <option disabled selected></option> */}
        <option value="">Sort by Name</option>
        <option value="sortName-a-z">By name A-Z</option>
        <option value="sortName-z-a">By name Z-A</option>
    </select>
    </ContainerMenu>
    </>
  );
}
