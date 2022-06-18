import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { switchTheme } from '../../Redux/actions';
import { ContainerSwitch, InputCheckBox, LaberlSwitch, LaberTheme, SpanSlider } from './Switch.css';

export default function Switch() {
     const theme = useSelector(state => state.theme);
     const dispatch = useDispatch();
    
  return (
    <ContainerSwitch>
    <LaberTheme htmlFor="theme" > {theme ? "Light Mode" : "Dark Mode" } </LaberTheme>
     <LaberlSwitch>
     <InputCheckBox type="checkbox" name="theme" id="theme" onChange={()=>dispatch(switchTheme(!theme))}/>
     <SpanSlider id='changeMode' ></SpanSlider>
     </LaberlSwitch>
     </ContainerSwitch>
  )
}

