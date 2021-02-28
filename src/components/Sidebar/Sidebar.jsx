import { Avatar, IconButton } from '@material-ui/core';
import { Chat, DonutLarge, MoreVert } from '@material-ui/icons';
import React from 'react';

import './Sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
    <div className='sidebar_header'>
      <Avatar />
      <div className='sidebar_headerRight'>
        <IconButton>
          <DonutLarge />
        </IconButton>
        <Chat />
        <MoreVert />        
      </div>
    </div>
    <div className='sidebar_search'></div>
    <div className='sidebar_chats'></div>
    </div>
  )
};

export default Sidebar;