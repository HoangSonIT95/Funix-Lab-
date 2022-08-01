import React, { useState } from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderSalary(props) {
  return (
    <Card className='col-lg-3 col-md-5 m-1'>
      <CardTitle className='m-2'>{props.staff.name}</CardTitle>
      <CardBody>
        <CardText>Mã Nhân Viên: {props.staff.id}</CardText>
        <CardText>Hệ Số Lương: {props.staff.salaryScale}</CardText>
        <CardText>Số Ngày Làm Thêm: {props.staff.overTime}</CardText>
        <CardText className='bg-light p-2 shadow'>
          Lương:{' '}
          {(
            props.staff.salaryScale * 3000000 +
            props.staff.overTime * 200000
          ).toFixed(0)}
        </CardText>
      </CardBody>
    </Card>
  );
}

function Salary(props) {
  // map từng props truyền vào hàm RenderSalary để render
  const staff = props.staffs.map(staff => {
    return <RenderSalary staff={staff} />;
  });

  return (
    <div className='container'>
      <div className='row mt-2'>
        <div className='col-7'>
          <Breadcrumb style={{ marginRight: '65%' }}>
            <BreadcrumbItem>
              <Link to='/nhanvien'>Nhân Viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className='ml-5 col-3'>
          <UncontrolledDropdown className='ml-5' direction='down'>
            <DropdownToggle caret color='primary'>
              Sắp Xếp
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>ID tăng dần</DropdownItem>
              <DropdownItem>ID giảm dần</DropdownItem>
              <DropdownItem>Lương tăng dần</DropdownItem>
              <DropdownItem>Lương giảm dần</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
      <div className='row'>{staff}</div>
    </div>
  );
}

export default Salary;
