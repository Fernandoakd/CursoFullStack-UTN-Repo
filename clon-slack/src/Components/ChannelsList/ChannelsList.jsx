import React from 'react'

const ChannelsList = ({channels}) => {
    
  return (
    channels.map(channel => {
      return(
          <div key={channel.id} className="channels-container">
            <a href="">
              <span># {channel.nombre}</span>
            </a>
          </div>
      )
  })
  )
}

export default ChannelsList