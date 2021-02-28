import { Avatar, IconButton } from '@material-ui/core';
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons';
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
        <IconButton>
          <Chat />
        </IconButton>
        <IconButton>
          <MoreVert />  
        </IconButton>              
      </div>
    </div>
    <div className='sidebar_search'>
      <SearchOutlined />
      <input placeholder="Search or start new chat" type='text' />
    </div>
    <div className='sidebar_chats'></div>
    </div>
  )
};

export default Sidebar;