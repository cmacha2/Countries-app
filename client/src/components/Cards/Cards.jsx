import React from 'react'
import { useSelector } from 'react-redux';
import Card from './Card'

export default function Cards() {
  const countries = useSelector(state => state.countries);
  return (
    <>
    {countries?.map(country => <div key={country.id}><Card country={country} /></div>)} 
    </>
  )
}
