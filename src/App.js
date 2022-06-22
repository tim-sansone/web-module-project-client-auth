import React from 'react';
import './App.css';
import { Switch, Route, Link} from 'react-router-dom';

import Login from "./components/Login";
import FriendsList from "./components/FriendsList";


function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <h2>Client Auth Project</h2>
        <nav>
          <Link className="App-link" to="/login">Login</Link>
          <Link className="App-link" to="/friendslist">Friends List</Link>
          <Link className="App-link" to="">Add Friend</Link>
          <Link className="App-link" to="">Log Out</Link>
        </nav>
      </header>

        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/friendslist" component={FriendsList}/>
        </Switch>
        
          
      
      
      
      
    </div>
  );
}

export default App;
