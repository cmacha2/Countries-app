import styled from "styled-components"


export const Container = styled.div`

    padding: 0;
    margin: 0;
    /* background-color: ${({theme})=> theme.bgc}; */
    /* color:${({theme})=> theme.text}; */
    /* font-family: 'DM Mono', monospace; */
    padding-bottom: 3.05rem;
   
.card-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row;
    margin: 1.5rem;
    padding: 0.5rem;
    /* padding-bottom: 3.6rem; */
}
 .buttonPages{
     display: flex;
     flex-direction: row;
     justify-content: center;
     align-items: center;
     &>button{
    background: linear-gradient(90deg,#ff8a00,#e52e71);
    text-shadow: none;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    /* -webkit-box-decoration-break: clone; */
    background-clip: text;
    border-color: white;

    font-style: normal;
    font-weight: 900;
    font-size: .5rem;
    color: #7a7a8c;
    text-transform: uppercase;
    font-size: .66rem;
    border: 3px solid #28242f;
    border-radius: 2rem;
    padding: .2rem .85rem .25rem;
    position: relative;

/*     
        padding:8px 12px ;
        background-color: #202C37;
        color:#eeeeee;
        cursor:pointer;
        margin: 1rem;

        border-radius: 5px;
        border: none;
        -webkit-box-shadow: 0px 0px 14px -1px rgba(20,19,20,1);
        -moz-box-shadow: 0px 0px 14px -1px rgba(20,19,20,1);
        box-shadow: 0px 0px 14px -1px rgba(20,19,20,1);

        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none; */
     }
 }
`








