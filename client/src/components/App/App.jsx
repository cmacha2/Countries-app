import React, { useState } from "react";
import { useSelector } from "react-redux";
import Cards from "../Cards/Cards.jsx"
import { Loading } from "../Loanding/Loading.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import SearchBar from "../SearchBar/SearchBar";

export default function App() {


  return (
      <div>
       
        <NavBar/>
        <SearchBar/>
         <Cards/>
        {/* <Wrapper/> */}
      </div>
  );
}
