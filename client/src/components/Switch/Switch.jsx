import React from 'react'
import dark from "./moon.png"
import ligth from "./sol.png"
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { switchTheme } from '../../Redux/actions';

export default function Switch() {
     const theme = useSelector(state => state.theme);
     const dispatch = useDispatch();
    
  return (
    <Container>  
        <div className="container">
    <label htmlFor="theme" className='label-theme'>{/* {theme ? "Light Theme" : "Dark Theme" } */}</label>
     <label className='switch'>
     <input type="checkbox" name="theme" id="theme" onChange={(e)=>dispatch(switchTheme(!theme))}/>
     <span className='slider' ></span>
     </label>
     </div>
     </Container>
  )
}

const Container = styled.div`
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
    background-color: #ccc;
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
    background-color: white;
    border-radius: 50px;
  }
  input:checked + .slider{
    background-color: #2B3743;
  }
  input:checked + .slider:before{
    transform: translateX(30px);
  }
}
}
`