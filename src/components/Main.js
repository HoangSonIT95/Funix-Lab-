import React, { useState } from 'react';
import { STAFFS, DEPARTMENTS } from '../shared/staffs';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import StaffList from './StaffList';
import StaffDetail from './StaffDetail';
import Dept from './Dept';
import Salary from './Salary';

function Main() {
  const [staffs, setStaffs] = useState(
    localStorage.getItem('staffs')
      ? JSON.parse(localStorage.getItem('staffs'))
      : STAFFS
  );
  const [dept, setDept] = useState(DEPARTMENTS);
  localStorage.setItem('staffs', JSON.stringify(staffs));
  // lấy params để truyền vào staffDetail
  const StaffWithId = ({ match }) => {
    return (
      <StaffDetail
        staffId={staffs.find(nv => nv.id === parseInt(match.params.id, 10))}
      />
    );
  };

  const addStaff = staff => {
    const id = staffs.length;
    const newStaff = { id, ...staff };
    setStaffs([...staffs, newStaff]);
    localStorage.setItem('staffs', JSON.stringify(staffs));
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route
          exact
          path='/nhanvien'
          component={() => <StaffList onAdd={addStaff} staffs={staffs} />}
        />
        <Route path='/nhanvien/:id' component={StaffWithId} />
        <Route path='/phongban' component={() => <Dept dept={dept} />} />
        <Route path='/bangluong' component={() => <Salary staffs={staffs} />} />
        <Redirect to='/nhanvien' />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
