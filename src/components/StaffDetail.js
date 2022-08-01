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

function RenderImg({ staff }) {
  return (
    <div className='col-12 col-lg-3 col-md-4 col-sm-12'>
      <Card>
        <CardImg src={staff.image} alt={staff.name} />
      </Card>
    </div>
  );
}

function RenderDescription({ staff }) {
  return (
    <div className='col-12 col-lg-9 col-md-8 col-sm-12'>
      <CardBody className='card-taolao'>
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
        <div className='container'>
          <div className='row'>
            <RenderImg staff={props.staffId} />
            <RenderDescription staff={props.staffId} />
          </div>
        </div>
      </div>
    );
  } else return <div></div>;
}

export default StaffDetail;
