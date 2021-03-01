import React, { useEffect, useState } from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons';

function Chat() {
  const [input, setInput] = useState('');
  const [seed, setSeed] = useState('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("You typed >>> ", input);
    setInput("");
  }

  return (
    <div className='chat'>
      <div className='chat_header'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat_headerInfo">
          <h3>Room name</h3>
          <p>Last Seen at ...</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className='chat_body'>
        <p className={`chat_message ${true && 'chat_receiver'}`}>
          <span className='chat_name'>Sagnik Ghosh</span>
          Hey Guys
          <span className='chat_timestemp'>1:30am</span>
        </p>
      </div>

      <div className='chat_footer'>
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type='text'
          />
          <button onClick={sendMessage} type='submit'>Send a message</button>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;