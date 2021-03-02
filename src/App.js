import React, { useState } from 'react';
import './App.css';

import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import Login from './components/Login/Login';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Router>
            <Sidebar/>
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat/>
              </Route>
              <Route path="/">
                <Chat/>
              </Route>              
            </Switch>            
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
