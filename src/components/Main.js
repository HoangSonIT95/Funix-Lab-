import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import StaffList from './StaffList';
import StaffDetail from './StaffDetail';
import Dept from './Dept';
import Salary from './Salary';

import { connect } from 'react-redux';

function Main(props) {
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

  const handleAddStaff = staff => {
    const id = props.staffs.length;
    const newStaff = { id, ...staff };
    props.addStaff(newStaff);
  };

  const handleSort = staffs => {
    props.sortSalary(staffs);
  };
  return (
    <div>
      <Header />
      <Switch>
        <Route
          exact
          path='/nhanvien'
          component={() => (
            <StaffList
              staffs={props.staffs}
              dept={props.dept}
              addStaff={handleAddStaff}
            />
          )}
        />
        <Route path='/nhanvien/:id' component={StaffWithId} />
        <Route path='/phongban' component={() => <Dept dept={props.dept} />} />
        <Route
          path='/bangluong'
          component={() => <Salary staffs={props.staffs} sort={handleSort} />}
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

const mapDispatchToProps = dispatch => {
  return {
    addStaff: newStaff => dispatch({ type: 'ADD_STAFF', payload: newStaff }),
    sortSalary: newStaffs =>
      dispatch({ type: 'SORT_SALARY', payload: newStaffs }),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
