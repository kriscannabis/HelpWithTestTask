import React, {useState} from "react";
import styled from "styled-components";

const Container = styled.div`
  display:flex;
`

const MessagesContainer = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Textarea = styled.textarea`
  width: 500px;
  height: 33px;
`

const MessageItem = styled.div`
  width: 600px;
  background: #f3f3f3;
  padding: 16px;
`

const chats = [
  {name:'Conversation', logo:''},
  {name:'Teem chat', logo:''},
  {name:'Meeting chat', logo:''},
]

const messages = [
  {nickname:'Саня', date:'', message:'Приве', isMe:false},
  {nickname:'Я', date:'', message:'привет', isMe:true},
  {nickname:'Саня', date:'', message:'Займи 100р', isMe:false},
  // {nickname:'Я', date:'', message:'ок', isMe:false}
]

const Messages = ()=>{
  const [message, setMessage] = useState('');
  const messageHandler = (e)=>{
    setMessage(e.target.value)
  }

  const enterHandler = (e)=>{
    if(e.key === "Enter"){ 
      messages.push({nickname:'Я', date:'', message:message, isMe:true}); 
      setMessage('')
    }
  }

  return(
    <Container>
      <div>
        {chats.map((chat, key)=>
          <div key={key}>{chat.name}</div>
        )}
      </div>

      <MessagesContainer>
        
        {messages.map((message, key)=>
          <MessageItem>
            {message.nickname}: {message.message}
          </MessageItem>
        )}

        <Textarea onChange={messageHandler} value={message} onKeyDown={enterHandler}></Textarea>
      </MessagesContainer>
    </Container>
  )
}

export default Messages;