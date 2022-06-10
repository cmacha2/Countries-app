import styled from "styled-components"


export const Container = styled.div`
    background-color:#202C37;
    text-decoration:none;
    box-shadow:none;
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
`