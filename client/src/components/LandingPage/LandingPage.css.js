import styled from "styled-components"



export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .content-img{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    padding: 1rem;
  }
  video{
    width: 100%;
    height: 100%;
    object-fit: cover;
   
  }
  .content{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    .button-enter{
      position: relative;
      display: inline-block;
      padding: 12px 36px;
      margin: 10px 0;
      color:#fff;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 18px;
      letter-spacing: 2px;
      border: none;
      border-radius: 40px;
      background: linear-gradient(90deg,#0162c8,#55e7fc);
    }
    
    .github{
      display: flex;
    justify-content: flex-end;
    position: relative;
    top: 29.5%;
    left: 55rem;
    }
    .linkedlin{
      display: flex;
    justify-content: flex-end;
    position: relative;
    top: 35%;
    left: 50rem;
    }
  }



  
`
