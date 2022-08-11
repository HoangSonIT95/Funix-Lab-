import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import StaffList from './StaffList';
import StaffDetail from './StaffDetail';
import Dept from './Dept';
import StaffsInDept from './DeptDetail';
import Salary from './Salary';
import {
  postStaff,
  fetchStaffs,
  fetchDept,
  fetchSalary,
  deleteStaff,
  updateStaff,
  fetchStaffInDept,
} from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// lấy state từ store redux làm props cho Main
const mapStateToProps = state => {
  return {
    staffs: state.staffs,
    dept: state.dept,
    staffsInDept: state.staffsInDept,
    salary: state.salary,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postStaff: newStaff => dispatch(postStaff(newStaff)),
    fetchStaffs: () => dispatch(fetchStaffs()),
    fetchDept: () => dispatch(fetchDept()),
    fetchStaffInDept: deptId => dispatch(fetchStaffInDept(deptId)),
    fetchSalary: () => dispatch(fetchSalary()),
    deleteStaff: id => dispatch(deleteStaff(id)),
    updateStaff: staff => dispatch(updateStaff(staff)),
  };
};
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddStaff = this.handleAddStaff.bind(this);
    this.StaffWithId = this.StaffWithId.bind(this);
    //this.StaffsWithDeptId = this.StaffWithDeptId.bind(this);
  }

  // lấy params để truyền vào staffDetail
  StaffWithId = ({ match }) => {
    return (
      <StaffDetail
        staff={this.props.staffs.staffs.find(
          nv => nv.id === parseInt(match.params.id, 10)
        )}
        dept={this.props.dept.dept}
        updateStaff={this.props.updateStaff}
      />
    );
  };

  StaffsWithDeptId = ({ match }) => {
    return (
      <StaffsInDept
        deptId={match.params.id}
        staffsInDept={this.props.staffsInDept}
        fetchStaffInDept={this.props.fetchStaffInDept}
      />
    );
  };

  handleAddStaff = staff => {
    const id = this.props.staffs.staffs.length;
    const newStaff = { id, ...staff };
    this.props.postStaff(newStaff);
  };
  componentDidMount() {
    this.props.fetchStaffs();
    this.props.fetchDept();
    this.props.fetchSalary();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            classNames='page'
            timeout={300}
          >
            <Switch location={this.props.location}>
              <Route
                exact
                path='/nhanvien'
                component={() => (
                  <StaffList
                    staffs={this.props.staffs}
                    dept={this.props.dept.dept}
                    postStaff={this.handleAddStaff}
                    deleteStaff={this.props.deleteStaff}
                  />
                )}
              />
              <Route path='/nhanvien/:id' component={this.StaffWithId} />
              <Route path='/phongban/:id' component={this.StaffsWithDeptId} />
              <Route
                exact
                path='/phongban'
                component={() => (
                  <Dept
                    dept={this.props.dept}
                    staffs={this.props.staffs.staffs}
                  />
                )}
              />
              <Route
                path='/bangluong'
                component={() => <Salary salary={this.props.salary} />}
              />
              <Redirect to='/nhanvien' />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
