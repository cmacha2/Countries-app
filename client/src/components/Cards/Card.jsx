import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './Card.css'

export default function Card({country}) {
  return (
    <Container>
      <div className='card'>
      <Link to={`/countries/${country.id}`} >
        <h2>{country.name}</h2>
         <span>{country.continent}</span>
        <img src={country.img} width={180} height={100} alt={country.name} />
        </Link>
        </div>
    </Container>
  )
}
