import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";
import { getCountries } from "../../Redux/actions";
import FormActivity from "../FormActivity/FormActivity";

export default function LandingPage() {
  
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(getCountries())
  // }, []);

  return (
    <>
      <Link to={'/home'}>Ingresar</Link>
     
    </>
  );
}
