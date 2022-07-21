import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import { STAFFS } from './shared/staffs';
import StaffList from './components/StaffList';
import Footer from './components/Footer';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { staffs: STAFFS };
  }
  render() {
    return (
      <div className='App'>
        {/* navbar */}
        <Navbar dark color='success'>
          <div className='container'>
            <NavbarBrand href='/'>Ứng dụng quản lý nhân sự V1.0</NavbarBrand>
          </div>
        </Navbar>
        {/* body content */}
        <StaffList staffs={this.state.staffs} />
        {/* footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
