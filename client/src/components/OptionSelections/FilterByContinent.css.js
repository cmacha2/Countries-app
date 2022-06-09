import styled from "styled-components"

export const ContainerMenu = styled.div`
.select{
    padding:8px 12px;
    color:#333333;
    background-color: #eeeeee;
    border:1px solid #dddddd;
    cursor:pointer;
    border-radius: 5px;

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url('https://banner2.cleanpng.com/20180405/fbq/kisspng-drop-down-list-computer-icons-down-arrow-5ac6e0cbd29f59.0790222715229831158627.jpg');
    background-position: right 10px top 50%;
    background-repeat: no-repeat;
    background-size: 10px;
    padding-right: 30px;
} 
.select:focus,
.select:hove{
    outline: none;
    border:1px solid #bbbbbb
}
.select option{
    background: #ffffff;
}
`