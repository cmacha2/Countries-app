import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './Card.css'

export default function Card({country}) {
  return (
    <Container>
         <article className="card">
          <header className="card-header">
            <img className='flag' src={country.img}  alt={country.name} />
           </header> 
   
           <div className="card-country">
             <div className="country-avatar" >
               <img src={country.img} alt={country.name} />
             </div>
             <svg className="half-circle" viewBox="0 0 106 57">
               <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
             </svg>

              <div>
             <div className="country-name">
               <div className="country-name-prefix">{country.name}</div>
               {country.continent}
             </div>
            
           </div>
             </div>
             <div className="tags">
           <Link to={`/countries/${country.id}`} >
           <button>Read more</button>
           </Link> 

           </div>

         </article>



 
      {/* <div className='card'>
      <Link to={`/countries/${country.id}`} >
        <h2 className='card-title'>{country.name}</h2>
         <span className='card_body'>{country.continent}</span>
        <img src={country.img} width={180} height={100} alt={country.name} />
        <button className='button'>LEAR MORE</button>
        </Link>
        </div> */}
    </Container>
  )
}
