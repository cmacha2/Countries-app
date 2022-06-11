import styled from "styled-components"


export const Container = styled.div`
   *{
       text-decoration: none;
   }
   .card{
    display: flex;
    position: relative;
    flex-direction: column;
    height: 350px;
    width:400px;
    min-width: 250px;
    padding: 1.5rem;
    border-radius: 16px;
    background: #17141d;
    box-shadow: -1erm 0 3rem;
    &:not(:first-child){
       margin-left: -4rem;
    }
    /* img{
        position:relative;
        clip-path: polygon(0 0,100% 0,100% 85%, 0 100%);
        width:100%;
        display: block;
        border-radius: 20px 20px 0 0;
    } */
   }
   .card:hover{
       transform: translate(-1rem);
   }
   .card:hover{
    ~ .card {
        transform:translate(-1rem)
    }
   }
`