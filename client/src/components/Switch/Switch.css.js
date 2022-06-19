import styled from "styled-components";

export const ContainerSwitch = styled.div`
  position: absolute;
   top: 2.5rem;
   right: 0rem;
   transform: translate(-50%,-50%);
   text-align: center;
`;

export const LaberTheme = styled.label`
 position: absolute;
 font-family: sans-serif;
 font-size: 1.2rem;
 font-weight: 10px;
   top: 50%;
   right: 80%;
   transform: translate(-50%,-50%);
   text-align: center;
   color: ${({theme})=> theme.text};
`;
export const LaberlSwitch = styled.label`
   position: relative;
   display: inline-block;
   width: 60px;
   height: 30px;
   margin: 0 10px;
   color: ${({theme})=> theme.bgc};
`

export const SpanSlider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({theme})=> theme.text};
    transition: .4s;
    border-radius: 34px;
    &:before{
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 5px;
    bottom: 5px;
    background-color: ${({theme})=> theme.bgc};
    border-radius: 50px;
    }
`;

export const InputCheckBox = styled.input`
  display: none;
  &:checked + ${SpanSlider} {
    background-color: ${({ theme }) => theme.text};
  }
  &:checked + ${SpanSlider}:before {
    background-color: ${({ theme }) => theme.bgc};
    transform: translateX(30px);
  }
`;
