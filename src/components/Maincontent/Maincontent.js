import React, { useState } from 'react'
import './Maincontent.css'

const MainContent = () => {
 
    const [currentChannel, setCurrentChannel] = useState('general');
  

    const channelMessages = {
      general: [
        { id: 1, user: 'Rohan ', time: '12:34 PM', text: 'Welcome to the general channel!' },
        { id: 2, user: 'Mohan', time: '12:35 PM', text: 'Glad to be here in general!' },
      ],
      random: [
        { id: 1, user: 'Rahul', time: '1:00 PM', text: 'This is the random channel!' },
        { id: 2, user: 'Ramesh', time: '1:05 PM', text: 'Random discussions start here!' },
      ],

    };
  
    const handleChannelChange = (channel) => {
      setCurrentChannel(channel);
    };
  
    return (
      <div className="main-content">
        <header className="header">
          <div className="channel-info">
            <h1>#{currentChannel}</h1>
          </div>
        </header>
        <div className="message-area">
          {channelMessages[currentChannel]?.length > 0 ? (
            channelMessages[currentChannel].map(message => (
              <div key={message.id} className="message">
                <div className="message-info">
                  <strong>{message.user}</strong> <span>{message.time}</span>
                </div>
                <p>{message.text}</p>
              </div>
            ))
          ) : (
            <p>No messages in this channel.</p>
          )}
        </div>
        <footer className="footer">
          <input type="text" placeholder="Type a message..." />
          <button>Send</button>
        </footer>
      </div>
    );
  };
  
  export default MainContent;