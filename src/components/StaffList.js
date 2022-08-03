import React, { useState } from 'react';
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  InputGroup,
  Input,
  Button,
  Breadcrumb,
  Form,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderStaff({ staff }) {
  return (
    <Card className='mt-1'>
      <Link to={`/nhanvien/${staff.id}`}>
        <CardBody className='border border-warning'>
          <CardImg src={staff.image} alt={staff.name} />
          <CardTitle className='text-center mt-3'>{staff.name}</CardTitle>
        </CardBody>
      </Link>
    </Card>
  );
}

function StaffList(props) {
  const [keywords, setKeywords] = useState('');

  const onSearch = event => {
    event.preventDefault();
    setKeywords(event.target.searchName.value);
  };

  // map từng phần tử từ props để render
  const staffList = props.staffs
    .filter(staff => {
      return staff.name.toUpperCase().includes(keywords.toUpperCase());
    })
    .map(staff => {
      return (
        <div key={staff.id} className='col-lg-2 col-md-4 col-6'>
          <RenderStaff staff={staff} />
        </div>
      );
    });

  return (
    <div className='container mt-2'>
      <div className='row mt-2'>
        <div className='col-lg-5 col-md-4 col-sm-4'>
          <Breadcrumb>
            <h6>Danh Sách Nhân Viên</h6>
          </Breadcrumb>
        </div>
        <div className='col-lg-3 col-md-4 col-sm-4'>
          <Button color='primary'>Thêm Nhân Viên</Button>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-4'>
          <Form className='row' type='submit' onSubmit={onSearch}>
            <Input
              className='col-lg-6 col-md-7 col-sm-6'
              placeholder='Tìm nhân viên'
              name='searchName'
            />
            <Button
              className='col-lg-4 col-md-5 col-sm-6'
              type='submit'
              color='primary'
            >
              <i className='fa fa-search' aria-hidden='true'></i>
              Tìm Kiếm
            </Button>
          </Form>
        </div>
      </div>
      <div className='row'>
        {staffList.length > 0 ? (
          staffList
        ) : (
          <h4 style={{ marginLeft: '27%', color: 'red', marginBottom: '5%' }}>
            Không tìm thấy kết quả phù hợp
          </h4>
        )}
      </div>
    </div>
  );
}
export default StaffList;
