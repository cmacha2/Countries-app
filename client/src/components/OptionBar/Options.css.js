import styled from "styled-components"


export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 2rem;
    /* .input-search{
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
    } */

`

export const ButtonCreateActivity = styled.button`
padding:8px 12px ;
/* color:#333333;
background-color: #eeeeee; */
background-color: ${({theme})=> theme.bgc};
color:${({theme})=> theme.text};
/* border:1px solid #dddddd; */
cursor:pointer;

border-radius: 5px;
border: none;
box-shadow: 5px 5px 17px rgba(0,0,0,0.2);

appearance: none;
-webkit-appearance: none;
-moz-appearance: none;
/* background-image: url('https://banner2.cleanpng.com/20180405/fbq/kisspng-drop-down-list-computer-icons-down-arrow-5ac6e0cbd29f59.0790222715229831158627.jpg'); */
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