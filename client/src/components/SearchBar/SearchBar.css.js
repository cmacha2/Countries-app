import styled from "styled-components"


export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 2rem;
    &>form{
        .input-search{
        height: 1.72rem;
        background-color: #2B3743;
        border: none;
        border-radius: 5px;
        -webkit-box-shadow: 0px 0px 14px -1px rgba(20,19,20,1);
        -moz-box-shadow: 0px 0px 14px -1px rgba(20,19,20,1);
        box-shadow: 0px 0px 14px -1px rgba(20,19,20,1); 
        }
        .buttonSearch{
        background-color: red;
        /* background-image: url('https://www.clipartmax.com/png/middle/8-85921_search-instagram-search-icon-vector.png'); */
        }
    }
`