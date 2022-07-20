import React, { Component } from 'react';
import './App.css';
import { STAFFS } from './shared/staffs';
import StaffList from './components/StaffList';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { staffs: STAFFS };
  }
  render() {
    return (
      <div className='App'>
        <StaffList />
      </div>
    );
  }
}

export default App;
