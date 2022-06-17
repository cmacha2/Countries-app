import styled from "styled-components"


export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 2rem;
    gap: 10px;
`

export const ButtonCreateActivity = styled.button`
padding:8px 12px ;
background-color: ${({theme})=> theme.bgc};
color:${({theme})=> theme.text};
cursor:pointer;
border-radius: 5px;
border: none;
box-shadow: 5px 5px 17px rgba(0,0,0,0.2);
appearance: none;
-webkit-appearance: none;
-moz-appearance: none;
background-position: right 10px top 50%;
background-repeat: no-repeat;
background-size: 10px;
padding-right: 30px;
&:focus,
&:hove{
outline: none;
border:1px solid #dddddd;
}
&:befor{
border: none;
}
`