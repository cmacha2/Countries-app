import styled from "styled-components"


export const Container = styled.div`
 body {
    padding: 0;
    margin: 0;
    background-color: #17141d;
    color: white;
    font-family: 'DM Mono', monospace;
}

.card-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row;
    margin: 1.5rem;
    padding: 0.5rem;
    
}
 .buttonPages{
     display: flex;
     flex-direction: row;
     justify-content: center;
     align-items: center;
     &>button{
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
        -moz-appearance: none;
     }
 }
`








