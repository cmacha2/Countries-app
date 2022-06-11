import styled from "styled-components"


export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 2rem;
    .input-search{
    height: 1.95rem;
    background-color: #2B3743;
    border: none;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 14px -1px rgba(20,19,20,1);
    -moz-box-shadow: 0px 0px 14px -1px rgba(20,19,20,1);
    box-shadow: 0px 0px 14px -1px rgba(20,19,20,1); 
    }
    .input-submit{
    border-radius: 5px;
    border: none;
    height:2rem;
    background:url('../../../../search.png') no-repeat right top; 
    color:#eeeeee; 
    padding-left:10px;
    -webkit-box-shadow: 0px 0px 14px -1px rgba(20,19,20,1);
    -moz-box-shadow: 0px 0px 14px -1px rgba(20,19,20,1);
    box-shadow: 0px 0px 14px -1px rgba(20,19,20,1); 
    }

`