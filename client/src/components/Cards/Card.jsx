import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonReadMore, CardCountry, CardHeader, Container, CountryAvatar, CountryName, CountryPrefix, ImgAvatar, ImgFlag, LogoCircle, ReadMore, StyledCard } from './Card.css'

export default function Card({country}) {
  return (
    <Container>
         <StyledCard>
          <CardHeader>
            <ImgFlag src={country.img}  alt={country.name} />
           </CardHeader>
           <CardCountry>
             <CountryAvatar>
               <ImgAvatar src={country.img} alt={country.name} />
             </CountryAvatar>
             <LogoCircle  viewBox="0 0 106 57">
               <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
             </LogoCircle>
             <CountryName>
               <CountryPrefix>{country.name}</CountryPrefix>
               {country.continent}
             </CountryName> 
             </CardCountry>
             <ReadMore>
           <Link to={`/countries/${country.id}`} >
           <ButtonReadMore id="readMore">Read more</ButtonReadMore>
           </Link> 
           </ReadMore>
         </StyledCard>
    </Container>
  )
}
