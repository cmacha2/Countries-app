import React from 'react'
import { Container } from './FormActivity.css'

export default function FormActivity() {
  return (
      <Container>

  {/* <section classNameName="form-register">
    <h4>Plan an activity</h4>
    <input classNameName="controls" type="text"  placeholder="Ingrese el nombre"/>
    <input classNameName="controls" type="text"  placeholder="Ingrese la dificultad"/>
    <input classNameName="controls" type="test" placeholder="Ingrese la duracion"/>
    <input classNameName="controls" type="test"  placeholder="Ingrese la temporada"/>
    <input classNameName="botons" type="submit" value="Create"/>
  </section> */}
  <div className='card'>


    <div className='container-name'>
        <h3>Name</h3>
    <input classNameName="name" type="text"  placeholder="Ingrese el nombre"/>
    </div>
  

    <div className='select-time'>
    <h3>Time</h3>
    <input type="text"/>
    <select name="activities" id="activities" className="select" >
        <option value={'allTime'} >Select time</option>
        <option >minutos</option>
        <option >horas</option>
        <option >dias</option>
        <option >semanas</option>
        <option >meses</option>
    </select>
    </div>

  <h3>Difficulty</h3>
<div className='container-difficulty'>
<label className="container">One
  <input type="radio" name="radio"/>
  <span className="checkmark"></span>
</label>
<label className="container">Two
  <input type="radio" name="radio"/>
  <span className="checkmark"></span>
</label>
<label className="container">Three
  <input type="radio" name="radio"/>
  <span className="checkmark"></span>
</label>
<label className="container">Four
  <input type="radio" name="radio"/>
  <span className="checkmark"></span>
</label>
<label className="container">Five
  <input type="radio" name="radio"/>
  <span className="checkmark"></span>
</label>
</div>
<h3>Season</h3>
<div className='container-temporate'>
<label className="container">Primavera
  <input type="radio"  name="radio"/>
  <span className="checkmark"></span>
</label>
<label className="container">Verano
  <input type="radio" name="radio"/>
  <span className="checkmark"></span>
</label>
<label className="container">Otoño
  <input type="radio" name="radio"/>
  <span className="checkmark"></span>
</label>
<label className="container">Invierno
  <input type="radio" name="radio"/>
  <span className="checkmark"></span>
</label>
</div>

</div>
</Container>
  )
}
