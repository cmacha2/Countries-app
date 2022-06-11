import styled from "styled-components"


export const Container = styled.div`
 .buttonPages{
        display: flex;
        justify-content: center;
        align-items: center;
        &>button{
            background-color: #202C37;
            padding:8px 12px;
            color:#eeeeee;
            border:1px solid #dddddd;
            cursor:pointer;
            border-radius: 5px;
        }
    }
    /* background-color:#202C37;
    height: 100vh;
    margin: 0;
    display: grid;
    place-items: center;
    */
    .cards{
        display: flex;
        padding: 3rem;
        overflow-x: scroll;
    }
    .cards::-webkit-scrollbar{
        width: 10px;
        height: 10px;
    }
    .cards::-webkit-scrollbar-thumb{
        background-color: #201c29;
        border-radius: 10px;
        box-shadow: inset 2px 2px 2px hsla(0,0%,100%,0.25) , inset -2px -2px 2px rgba(0, 0, 0, 0.25);
    }
`