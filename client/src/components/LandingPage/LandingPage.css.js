import styled from "styled-components";

export  const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden; 
`
export const VideoScreen = styled.video`
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`
export const ContainerWelcome = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
`
export const ImgLogo = styled.img`
cursor: pointer;
`
export const ButtonEnter = styled.button`
      position: relative;
      display: inline-block;
      padding: 12px 36px;
      margin: 10px 0;
      color:#fff;
      cursor: pointer;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 18px;
      letter-spacing: 2px;
      border: none;
      border-radius: 40px;
      background: linear-gradient(90deg,#0162c8,#55e7fc);
`

export const ContainerSocialMedia = styled.div`
    position: absolute;
    width: 9rem;
    height: 4.8rem;
    bottom: 0;
    display: flex;
    flex-direction: row;
    padding: 1rem;
  `

  export const ImgSocialMedia =  styled.img`
      cursor: pointer;
      padding-left: 0.3rem;
  `