import React from "react";
import { ContainerActivity } from "./Details.css";

export default function Activity({ act }) {
  return (
    <ContainerActivity>
      <span >Activity: {act.name}</span>
      <p></p>
      <span>Dificulty: {act.difficulty} </span>
      <span>Duration: {act.duration} </span>
      <span>Season: {act.season} </span>
    </ContainerActivity>
  );
}
