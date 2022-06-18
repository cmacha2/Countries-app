import styled from "styled-components"


export const Wrapper = styled.div`
    display: flex;
    height: 5.2rem;
    background-color: ${({theme})=> theme.bgc};
    padding: 1.7rem;
    -webkit-box-shadow: 0px 0px 2px -1px rgba(20,19,20,1);
    -moz-box-shadow: 0px 0px 2px -1px rgba(20,19,20,1);
    box-shadow: 0px 0px 8px -1px rgba(10,9,20,1);
`

export const ContainerIMG = styled.div`
    position: absolute;
    top: 0;
    padding-top: 0.9rem;
`