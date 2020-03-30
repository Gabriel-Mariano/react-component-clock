import React, { Component } from 'react';
import './global.css';
import Clock from './components/clock';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Clock name="This is my clock"/>
      </div>
    )
  }
}

export default App;
