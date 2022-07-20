import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';
import dateFormat from 'dateformat';

/* class RenderStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkStaff: true,
    };
  }

  close() {
    this.setState({ checkStaff: false });
  }

  render() {
    if (this.props.staff && this.state.checkStaff) {
      return (
        <div className='row'>
          <Card>
            <button
              type='button'
              class='close'
              aria-label='Close'
              onClick={() => this.close()}
            >
              Đóng
            </button>
            <CardImg src={this.props.staff.image} alt={this.props.staff.name} />
            <CardBody>
              <CardTitle>Họ và tên: {this.props.staff.name}</CardTitle>
              <CardText>
                Ngày sinh: {dateFormat(this.props.staff.doB, 'dd/mm/yyyy')}
              </CardText>
              <CardText>
                Ngày vào công ty:{' '}
                {dateFormat(this.props.staff.startDate, 'dd/mm/yyyy')}
              </CardText>
              <CardText>Phòng ban: {this.props.staff.department.name}</CardText>
              <CardText>
                Số ngày nghỉ còn lại: {this.props.staff.annualLeave}
              </CardText>
              <CardText>
                Số ngày đã làm thêm: {this.props.staff.overTime}
              </CardText>
            </CardBody>
          </Card>
        </div>
      );
    }
    return <div></div>;
  }
} */

function RenderImg({ staff }) {
  return (
    <div className='col-12 col-md-5 m-1'>
      <Card>
        <CardImg src={staff.image} alt={staff.name} />
      </Card>
    </div>
  );
}

function RenderDetails({ staff }) {
  return (
    <div className='col-12 col-md-5 m-1'>
      <CardBody>
        <CardTitle>Họ và tên: {staff.name}</CardTitle>
        <CardText>Ngày sinh: {dateFormat(staff.doB, 'dd/mm/yyyy')}</CardText>
        <CardText>
          Ngày vào công ty: {dateFormat(staff.startDate, 'dd/mm/yyyy')}
        </CardText>
        <CardText>Phòng ban: {staff.department.name}</CardText>
        <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
        <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
      </CardBody>
    </div>
  );
}

const RenderStaff = props => {
  if (props.staff) {
    return (
      <Card className='m-2'>
        <button
          type='button'
          class='close'
          aria-label='Close'
          onClick={() => props.handleStaffSelected(null)}
        >
          Đóng
        </button>
        <div className='row'>
          <RenderImg staff={props.staff} />
          <RenderDetails staff={props.staff} />
        </div>
      </Card>
    );
  } else return <div></div>;
};

export default RenderStaff;
