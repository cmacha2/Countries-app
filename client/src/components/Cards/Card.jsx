import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({country}) {
  return (
    <div>
      <Link to={`/countries/${country.id}`} style={{ textDecoration: 'none' }}>
        <h2>{country.name}</h2>
         <span>{country.continent}</span>
        <img src={country.img} width={200} alt={country.name} />
        </Link>
    </div>
  )
}
