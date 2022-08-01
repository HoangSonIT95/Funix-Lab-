import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
