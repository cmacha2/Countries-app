import React from 'react'

export default function Card({country}) {
  return (
    <div>
        <h2>{country.name}</h2>
         <span>{country.continent}</span>
        <img src={country.img} alt={country.name} />
    </div>
  )
}
