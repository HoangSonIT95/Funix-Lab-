import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import dateFormat from 'dateformat';

class RenderStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.staff) {
      return (
        <div className='row'>
          <Card>
            <button type='button' class='btn-close' aria-label='Close'></button>
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
}

export default RenderStaff;
