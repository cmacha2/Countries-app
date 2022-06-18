import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import SortByPopulation from "../OptionSelections/SortByPopulation";
import SortByName from "../OptionSelections/SortByName";
import FilterByContinent from "../OptionSelections/FilterByContinent";
import FilterByActivities from "../OptionSelections/FilterByActivities";
import { ButtonCreateActivity, Container } from "./Options.css";
import useQuery from "../hooks/useQuery";
import { getCountries, getCountriesMatch } from "../../Redux/actions";
import { useDebounce } from "../hooks/useDebounce";
import styled from "styled-components";

export default function OptionBar() {
  const history = useHistory();
  return (
    <Container>
      <FilterByContinent/>
      <SortByName/>
      <SortByPopulation/>
      <FilterByActivities/>
      <ButtonCreateActivity id="buttonCreateActivity" type="submit" onClick={()=> history.replace(`/activities`)}>Create Activities</ButtonCreateActivity>
    </Container>
  );
}


