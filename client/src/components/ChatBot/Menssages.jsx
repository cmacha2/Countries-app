import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'


export default function Messages({msg,index}) {
  const messagesEndRef = useRef(null)
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [msg]);

  return (
    <Container ref={messagesEndRef} >
      {index!==0 && <ChatUser>{msg.usuario}</ChatUser>}
      <ContainerBot>
      {<ChatsBot>{msg.bot}</ChatsBot>}
      </ContainerBot>
    </Container >
  )
}

// #3E618A

const ChatUser = styled.p`
  background-color:${({theme})=> theme.botMsgUser};
  margin-left: 25px;
  margin-right: 5px;
  border-radius: 0.6rem; 
  word-wrap: break-word;
  padding: 0.4rem;
  color: ${({theme})=> theme.text};
`

const Container = styled.div`
padding-bottom: 0.4rem;`

const ContainerBot = styled.div`

padding-top: 0.4rem;`

const ChatsBot = styled.p`
background-color:${({theme})=> theme.MsgBot};
margin-left: 5px;
margin-right: 25px; 
border-radius: 0.6rem; 
padding: 0.4rem;
color: ${({theme})=> theme.text};

`