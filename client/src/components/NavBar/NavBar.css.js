import styled from "styled-components"


export const Container = styled.div`
    display: flex;
    height: 4.8rem;
    background-color: ${({theme})=> theme.bgc};
    padding: 1.7rem;
    .content-img{
    position: absolute;
    top: 0;
    padding-top: 0.9rem;
    }
    -webkit-box-shadow: 0px 0px 2px -1px rgba(20,19,20,1);
-moz-box-shadow: 0px 0px 2px -1px rgba(20,19,20,1);
box-shadow: 0px 0px 8px -1px rgba(10,9,20,1);
`