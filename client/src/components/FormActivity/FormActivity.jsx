import React from 'react'
import { Container } from './FormActivity.css'

export default function FormActivity() {
  return (
      <Container>

  <section className="form-register">
    <h4>Form Create Activity</h4>
    <input className="controls" type="text"  placeholder="Ingrese el nombre"/>
    <input className="controls" type="text"  placeholder="Ingrese la dificultad"/>
    <input className="controls" type="test" placeholder="Ingrese la duracion"/>
    <input className="controls" type="test"  placeholder="Ingrese la temporada"/>
    <input className="botons" type="submit" value="Create"/>
  </section>

</Container>
  )
}
