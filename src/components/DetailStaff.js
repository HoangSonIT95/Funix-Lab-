import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardText,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';
import dateFormat from 'dateformat';

class StaffDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  render() {
    if (this.props.staff) {
      return (
        <div className='row'>
          <Card>
            <button type='button' class='close' aria-label='Close'>
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
}

export default StaffDetail;
