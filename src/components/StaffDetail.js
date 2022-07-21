import React from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';
import dateFormat from 'dateformat';

// render staff image
function RenderImg({ staff }) {
  return (
    <div className='col-12 col-md-5 m-1'>
      <Card>
        <CardImg src={staff.image} alt={staff.name} />
      </Card>
    </div>
  );
}

//render staff description
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

// render staff from 2 function RenderImg & RenderDetails
const RenderStaff = props => {
  if (props.staff) {
    return (
      <Card className='m-2'>
        <button
          type='button'
          className='close m-2'
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
