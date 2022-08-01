import React, { useState } from 'react';
import { STAFFS, DEPARTMENTS } from '../shared/staffs';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import StaffList from './StaffList';
import StaffDetail from './StaffDetail';
import Dept from './Dept';

function Main() {
  // lấy dữ liệu làm state
  const [staff, setStaff] = useState({
    staffs: STAFFS,
    dept: DEPARTMENTS,
  });

  // lấy params để truyền vào staffDetail
  const StaffWithId = ({ match }) => {
    return (
      <StaffDetail
        staffId={staff.staffs.find(
          nv => nv.id === parseInt(match.params.id, 10)
        )}
      />
    );
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route
          exact
          path='/nhanvien'
          component={() => <StaffList staffs={staff.staffs} />}
        />
        <Route path='/nhanvien/:id' component={StaffWithId} />
        <Route path='/phongban' component={() => <Dept dept={staff.dept} />} />
        <Redirect to='/nhanvien' />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
