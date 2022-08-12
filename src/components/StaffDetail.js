import React, { useState } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Col,
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';
import { FadeTransform } from 'react-animation-components';

// điều kiện validate form sửa thông tin
const required = val => val && val.toString().length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;
const isNumber = val => !isNaN(Number(val));

// render ảnh nhân viên
function RenderImg({ staff }) {
  return (
    <div className='col-12 col-lg-3 col-md-4 col-sm-12'>
      <Card>
        <CardImg src={staff.image} alt={staff.name} />
      </Card>
    </div>
  );
}

// render thông tin nhân viên
function RenderDescription({ staff, dept }) {
  return (
    <div className='col-12 col-lg-9 col-md-8 col-sm-12'>
      <CardBody className='card-taolao'>
        <CardTitle>Họ và tên: {staff.name}</CardTitle>
        <CardText>Ngày sinh: {dateFormat(staff.doB, 'dd/mm/yyyy')}</CardText>
        <CardText>
          Ngày vào công ty: {dateFormat(staff.startDate, 'dd/mm/yyyy')}
        </CardText>
        <CardText>
          Phòng ban: {dept.find(dept => dept.id === staff.departmentId).name}
        </CardText>
        <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
        <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
      </CardBody>
    </div>
  );
}

function StaffDetail(props) {
  if (props.staff && props.dept.length) {
    return (
      <div className='container'>
        <div className='row'>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to='/nhanvien'>Nhân Viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className='container'>
          <FadeTransform
            in
            transformProps={{
              exitTransform: 'scale(0.2) translateY(-50%)',
            }}
          >
            <div className='row'>
              <RenderImg staff={props.staff} />
              <RenderDescription staff={props.staff} dept={props.dept} />
            </div>
          </FadeTransform>
        </div>
      </div>
    );
  } else return <div></div>;
}

export default StaffDetail;
