import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import StaffList from './StaffList';
import StaffDetail from './StaffDetail';
import Dept from './Dept';
import Salary from './Salary';
import { addStaff, fetchStaffs } from '../redux/ActionCreators';

// lấy state từ store redux làm props cho Main
const mapStateToProps = state => {
  return { staffs: state.staffs, dept: state.dept };
};

const mapDispatchToProps = dispatch => {
  return {
    addStaff: newStaff => dispatch(addStaff(newStaff)),
    fetchStaffs: () => dispatch(fetchStaffs()),
  };
};
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddStaff = this.handleAddStaff.bind(this);
    this.StaffWithId = this.StaffWithId.bind(this);
  }

  // lấy params để truyền vào staffDetail
  StaffWithId = ({ match }) => {
    return (
      <StaffDetail
        staffId={this.props.staffs.staffs.find(
          nv => nv.id === parseInt(match.params.id, 10)
        )}
      />
    );
  };

  handleAddStaff = staff => {
    const id = this.props.staffs.staffs.length;
    const newStaff = { id, ...staff };
    this.props.addStaff(newStaff);
  };
  /* componentDidMount() {
    this.props.fetchStaffs();
  } */
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path='/nhanvien'
            component={() => (
              <StaffList
                staffs={this.props.staffs}
                dept={this.props.dept}
                addStaff={this.handleAddStaff}
              />
            )}
          />
          <Route path='/nhanvien/:id' component={this.StaffWithId} />
          <Route
            path='/phongban'
            component={() => <Dept dept={this.props.dept} />}
          />
          <Route
            path='/bangluong'
            component={() => <Salary staffs={this.props.staffs.staffs} />}
          />
          <Redirect to='/nhanvien' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
