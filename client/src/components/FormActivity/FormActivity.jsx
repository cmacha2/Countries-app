import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../Redux/actions';
import { Container } from './FormActivity.css'

export default function FormActivity() {
    const allCountries = useSelector(state => state.allCountries);
    const dispatch = useDispatch();
    const [countries, setCountries] = useState([]);
    if(!allCountries.length)dispatch(getCountries())

    const  onChange = (e)=>{
        setCountries([...countries,{id:e.target.value}])
    }
    console.log(countries)
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

    <h3>Name</h3>
    <div className='container-name'>
    <input className="name" type="text"  placeholder="Ingrese el nombre"/>
    </div>
  
    <h3>Time</h3>
    <div className='select-time'>
    <input type="text" className='time'/>
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

<h3>Countries</h3>
<div className='countries'>
<select id="activities" className="select-countries" onChange={onChange}>
        <option >Select Countries</option>
        {allCountries?.map((c,i)=> <option key={i} value={c.id} value2={c.name}>{c.name}</option>)}
</select>
<div className='countries-selected'>
   { countries?.map(c=><label className='country' key={c.id}>{c.id}</label>)}
</div>
</div>
</div>
</Container>
  )
}
