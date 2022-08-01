import React, { useState } from 'react';
import { STAFFS, DEPARTMENTS } from '../shared/staffs';
import Header from './Header';
import Footer from './Footer';
import StaffList from './StaffList';
import { Switch, Route, Redirect } from 'react-router-dom';

function Main() {
  const [staff, setStaff] = useState({
    staffs: STAFFS,
    dept: DEPARTMENTS,
  });
  return (
    <div>
      <Header />
      <Switch>
        <Route
          exact
          path='/nhanvien'
          component={() => <StaffList staffs={staff.staffs} />}
        />

        <Redirect to='/nhanvien' />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
