import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import UserContainer from './containers/UserContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Got Mans Ps</h2>
        </div>
         <UserContainer />
      </div>
    );
  }
}

export default App;
