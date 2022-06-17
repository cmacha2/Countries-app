import styled from "styled-components";

export const ContainerApp = styled.div`
  background: ${({theme})=> theme.back};
  color: ${({theme})=> theme.text};
  height: 100vh;
  width: 100%;
`

export const ContainerButtonChatBot = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    padding: 1rem;
`