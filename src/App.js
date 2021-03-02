import React from 'react';
import './App.css';

import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';

function App() {
  return (
    <div className="app">
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
    </div>
  );
}

export default App;
