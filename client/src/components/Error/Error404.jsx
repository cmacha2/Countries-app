import React from 'react'
import styled from "styled-components"

export default function Error404() {
  return (
    <ContainerError404>
      <ImgEdit src="https://i.postimg.cc/cJFpPwQG/404-png-not-Found-1.png" width={1300} alt="404-not-found" />
    </ContainerError404>
  )
}


const ContainerError404 = styled.div`
  height: 500px;
  position: relative;
`
const ImgEdit = styled.img`
   width: 100%;
   height: 100%;
   position: fixed;
   left: 0;
   top: 0;
`