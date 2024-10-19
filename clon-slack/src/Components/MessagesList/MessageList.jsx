import React from 'react'
import Message from '../Message/Message'

const MessageList = ({messages}) => {
  return (
    messages.map(message => {
      return (
          <Message key={message.id} author={message.author} hour={message.hour} text={message.text}/>
        )
  })
  )
}

export default MessageList