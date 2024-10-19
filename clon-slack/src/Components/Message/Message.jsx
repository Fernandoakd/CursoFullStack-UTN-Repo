import React from 'react'

const Message = ({author, hour, text}) => {
  return (
    <div>
        <div className="message-information">
            <span>{author}</span>
            <span>{hour}</span>
        </div>
        <div className="message-content">
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Message