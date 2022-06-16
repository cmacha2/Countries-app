import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'


export default function Messages({msg,check,index}) {
  const messagesEndRef = useRef(null)
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [msg]);

  return (
    <Container switch={check} ref={messagesEndRef} >
      <div className="container-user">
      {index!==0 && <p className="chatsUser">{msg.usuario}</p>}
      </div>
      <div className="container-bot">
      {<p className="chatsBot">{msg.bot}</p>}
      </div>
    </Container >
  )
}

const Container = styled.div`
padding-bottom: 0.4rem;
.container-user{
 /* padding-top: 0.4rem; */

.chatsUser{
  background-color:${props => props.switch ?  "#3E618A" :  " #f2f2f294" };
  margin-left: 25px;
  margin-right: 5px;
  border-radius: 0.6rem; 
  word-wrap: break-word;
  padding: 0.4rem;
  color:  ${props => props.switch ? "#fAFAFA" : " #000000" };
  }
 }
 .container-bot{
  padding-top: 0.4rem;

  .chatsBot{
  background-color:${props => props.switch ? "#232E3B" :  " #cbcbcbb5"  };
  margin-left: 5px;
  margin-right: 25px; 
  border-radius: 0.6rem; 
  padding: 0.4rem;
  color: ${props => props.switch ? "#fAFAFA" : " #000000" };
  }
}
`