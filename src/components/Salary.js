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
  let staffList = props.staffs;
  /* const [staffs, setStaffs] = useState({
    staffs: staffList,
  }); */
  const idDown = () => {
    staffList.sort(function (a, b) {
      return b.id - a.id;
    });
    props.sort(staffList);
  };
  const idUp = () => {
    staffList.sort(function (a, b) {
      return a.id - b.id;
    });
    props.sort(staffList);
  };

  const salaryDown = () => {
    staffList.sort(function (a, b) {
      return (
        (b.salaryScale * 3000000 + b.overTime * 200000).toFixed(0) -
        (a.salaryScale * 3000000 + a.overTime * 200000).toFixed(0)
      );
    });
    props.sort(staffList);
  };

  const salaryUp = () => {
    staffList.sort(function (a, b) {
      return (
        (a.salaryScale * 3000000 + a.overTime * 200000).toFixed(0) -
        (b.salaryScale * 3000000 + b.overTime * 200000).toFixed(0)
      );
    });
    props.sort(staffList);
  };

  /*   const sort = type => {
    console.log(type);
    let staffs = props.staffs;
    switch (type) {
      case 'idUp':
        staffs = props.staffs.sort((a, b) => {
          a.id - b.id;
        });
        break;
      case 'idDown':
        staffs = props.staffs.sort((a, b) => {
          b.id - a.id;
        });
        break;
      case 'salaryUp':
        staffs = props.staffs.sort((a, b) => {
          (a.salaryScale * 3000000 + a.overTime * 200000).toFixed(0) -
            (b.salaryScale * 3000000 + a.overTime * 200000).toFixed(0);
        });
        break;
      case 'salaryDown':
        staffs = props.staffs.sort((a, b) => {
          (b.salaryScale * 3000000 + b.overTime * 200000).toFixed(0) -
            (a.salaryScale * 3000000 + a.overTime * 200000).toFixed(0);
        });
        break;
      default:
        return staffs;
    }
    console.log(staffs);
    props.sort(staffs);
  }; */
  // map từng props truyền vào hàm RenderSalary để render
  const staffs = props.staffs.map(staff => {
    return <RenderSalary staff={staff} />;
  });

  return (
    <div className='container'>
      <div className='row mt-2'>
        <div className='col-lg-7 col-md-6 col-sm-6'>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to='/nhanvien'>Nhân Viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div className='col-lg-3 col-md-4 col-sm-6'>
          <UncontrolledDropdown className='ml-5' direction='down'>
            <DropdownToggle caret color='primary'>
              Sắp Xếp
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={idUp}>ID tăng dần</DropdownItem>
              <DropdownItem onClick={idDown}>ID giảm dần</DropdownItem>
              <DropdownItem onClick={salaryUp}>Lương tăng dần</DropdownItem>
              <DropdownItem onClick={salaryDown}>Lương giảm dần</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
      <div className='row'>{staffs}</div>
    </div>
  );
}

export default Salary;
