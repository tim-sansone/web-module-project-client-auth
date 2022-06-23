import React from 'react';
import './App.css';
import { Switch, Route, Link} from 'react-router-dom';


import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import Friend from "./components/Friend"
import AddFriend from "./components/AddFriend";
import Logout from "./components/Logout";
import PrivateRoute from "./components/PrivateRoute";


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h2>Client Auth Project</h2>
        <nav>
          <Link className="App-link" to="/login">Login</Link>
          <Link className="App-link" to="/friends">Friends List</Link>
          <Link className="App-link" to="/add">Add Friend</Link>
          <Link className="App-link" to="/logout">Log Out</Link>
        </nav>
      </header>

        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/friends/:id" component={Friend} />
          <PrivateRoute path="/friends" component={FriendsList}/>
          <PrivateRoute path="/add" component={AddFriend} />
          <PrivateRoute path="/logout" component={Logout} />
        </Switch>
        
          
      
      
      
      
    </div>
  );
}

export default App;
