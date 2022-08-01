import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';

function RenderDescription({ staff }) {
  return (
    <div className='row'>
      <div className='col-12 col-md-5 m-1'>
        <Card>
          <CardImg src={staff.image} alt={staff.name} />
        </Card>
      </div>
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
    </div>
  );
}

function StaffDetail(props) {
  if (props.staffId) {
    return (
      <div className='container'>
        <div className='row'>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to='/nhanvien'>Nhân Viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.staffId.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className='col-12'>
            <h3>{props.staffId.name}</h3>
            <hr />
          </div>
        </div>
        <div className='row'>
          <RenderDescription staff={props.staffId} />
        </div>
      </div>
    );
  } else return <div></div>;
}

export default StaffDetail;
