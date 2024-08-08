import React from 'react'
import './Sidebar.css'

const Sidebar = ({ onChannelChange }) => {
    return (
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Channels</h2>
        </div>
        <div className="sidebar-content">
          <ul>
            <li onClick={() => onChannelChange('general')}># general</li>
            <li onClick={() => onChannelChange('random')}># random</li>
            <li onClick={() => onChannelChange('project-alpha')}># Sports</li>
            
          </ul>
        </div>
      </aside>
    );
  };
  
  export default Sidebar;
