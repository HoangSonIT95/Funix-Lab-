import React, { useState } from 'react';
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  Breadcrumb,
  InputGroup,
  Input,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderStaff({ staff }) {
  return (
    <Card className='mt-1'>
      <Link to={`/nhanvien/${staff.id}`}>
        <CardBody className='border border-warning'>
          <CardImg src={staff.image} alt={staff.name} />
          <CardTitle className='text-center mt-4'>{staff.name}</CardTitle>
        </CardBody>
      </Link>
    </Card>
  );
}

function StaffList(props) {
  // map từng phần tử từ props để render
  const staffList = props.staffs.map(staff => {
    return (
      <div key={staff.id} className='col-lg-2 col-md-4 col-sm-6'>
        <RenderStaff staff={staff} />
      </div>
    );
  });

  return (
    <div className='container'>
      <div className='row mt-2 '>
        <div className='col-7'>
          <Breadcrumb style={{ marginRight: '65%' }}>
            <h5 className='center-text'>Danh sách nhân viên</h5>
          </Breadcrumb>
        </div>
      </div>
      <div className='row'>{staffList}</div>
    </div>
  );
}

export default StaffList;
