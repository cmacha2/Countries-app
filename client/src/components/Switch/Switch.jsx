import React from 'react'
import dark from "./moon.png"
import ligth from "./sol.png"
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { switchTheme } from '../../Redux/actions';
import { ContainerSwitch } from './Switch.css';

export default function Switch() {
     const theme = useSelector(state => state.theme);
     const dispatch = useDispatch();
    
  return (
    <ContainerSwitch>  
        <div className="container">
    <label htmlFor="theme" className='label-theme'> {theme ? "Light Mode" : "Dark Mode" } </label>
     <label className='switch'>
     <input type="checkbox" name="theme" id="theme" onChange={(e)=>dispatch(switchTheme(!theme))}/>
     <span className='slider' ></span>
     </label>
     </div>
     </ContainerSwitch>
  )
}

