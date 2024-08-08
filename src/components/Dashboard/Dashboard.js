import React, { useState } from 'react'
import './Dashboard.css'
import Sidebar from '../Sidebar/Sidebar'
import Maincontent from '../Maincontent/Maincontent'


const Dashboard = () => {

    const [currentChannel, setCurrentChannel] = useState('general');

    const handleChannelChange = (channel) => {
      setCurrentChannel(channel);
    };


  return (
    <div className="dashboard">

    <Sidebar onChannelChange={handleChannelChange}/>
    <Maincontent currentChannel={currentChannel}/>
    </div>
  )
}

export default Dashboard