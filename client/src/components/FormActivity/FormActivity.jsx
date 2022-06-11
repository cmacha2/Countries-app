import React from 'react'
import { Container } from './FormActivity.css'

export default function FormActivity() {
  return (
      <Container>

  <section class="form-register">
    <h4>Form Create Activity</h4>
    <input class="controls" type="text"  placeholder="Ingrese el nombre"/>
    <input class="controls" type="text"  placeholder="Ingrese la dificultad"/>
    <input class="controls" type="test" placeholder="Ingrese la duracion"/>
    <input class="controls" type="test"  placeholder="Ingrese la temporada"/>
    <input class="botons" type="submit" value="Create"/>
  </section>

</Container>
  )
}
