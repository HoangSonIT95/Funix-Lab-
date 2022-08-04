import React, { useState } from 'react';
import { STAFFS, DEPARTMENTS } from '../shared/staffs';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import StaffList from './StaffList';
import StaffDetail from './StaffDetail';
import Dept from './Dept';
import Salary from './Salary';

import { connect } from 'react-redux';

function Main(props) {
  /* const [staffs, setStaffs] = useState(STAFFS);
  const [dept, setDept] = useState(DEPARTMENTS); */
  // lấy params để truyền vào staffDetail
  const StaffWithId = ({ match }) => {
    return (
      <StaffDetail
        staffId={props.staffs.find(
          nv => nv.id === parseInt(match.params.id, 10)
        )}
      />
    );
  };

  /* const addStaff = staff => {
    const id = staffs.length;
    const newStaff = { id, ...staff };
    setStaffs([...staffs, newStaff]);
  }; */

  return (
    <div>
      <Header />
      <Switch>
        <Route
          exact
          path='/nhanvien'
          component={() => <StaffList staffs={props.staffs} />}
        />
        <Route path='/nhanvien/:id' component={StaffWithId} />
        <Route path='/phongban' component={() => <Dept dept={props.dept} />} />
        <Route
          path='/bangluong'
          component={() => <Salary staffs={props.staffs} />}
        />
        <Redirect to='/nhanvien' />
      </Switch>
      <Footer />
    </div>
  );
}
// lấy state từ store redux làm props cho Main
const mapStateToProps = state => {
  return { staffs: state.staffs, dept: state.dept };
};

export default withRouter(connect(mapStateToProps)(Main));
