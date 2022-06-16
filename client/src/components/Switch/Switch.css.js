import styled from "styled-components";

export const ContainerSwitch = styled.div`
.container{
   position: absolute;
   top: 4%;
   left: 97%;
   transform: translate(-50%,-50%);
   text-align: center;
   .label-theme{
   position: absolute;
   top: 50%;
   right: 80%;
   transform: translate(-50%,-50%);
   text-align: center;
   }
   .switch{
   position: relative;
   display: inline-block;
   width: 60px;
   height: 30px;
   margin: 0 10px;
   .slider{
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color:#2B3743;
    transition: .4s;
    border-radius: 34px;
   }
   input{display:none}
   .slider:before{
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 5px;
    bottom: 5px;
    background-color:white;
    border-radius: 50px;
  }
  input:checked + .slider{
    background-color: white;
  }
  input:checked + .slider:before{
    background-color: #2B3743;
    transform: translateX(30px);
  }
}
}
`