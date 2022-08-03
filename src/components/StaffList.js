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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSearch = event => {
    event.preventDefault();
    setKeywords(event.target.searchName.value);
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
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
          <Button color='primary' onClick={toggleModal}>
            Thêm Nhân Viên
          </Button>
        </div>
        <Modal isOpen={isModalOpen} toggle={toggleModal}>
          <ModalHeader>Thêm Nhân Viên Mới</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup className='row'>
                <Label htmlFor='name' className='col-5'>
                  Họ và Tên
                </Label>
                <Input
                  className='col-6 ml-3'
                  type='text'
                  id='name'
                  name='name'
                />
              </FormGroup>
              <FormGroup className='row'>
                <Label htmlFor='doB' className='col-5'>
                  Ngày sinh
                </Label>
                <Input className='col-6 ml-3' type='date' id='doB' name='doB' />
              </FormGroup>
              <FormGroup className='row'>
                <Label htmlFor='startDate' className='col-5'>
                  Ngày vào công ty
                </Label>
                <Input
                  className='col-6 ml-3'
                  type='date'
                  id='startDate'
                  name='startDate'
                />
              </FormGroup>
              <FormGroup className='row'>
                <Label htmlFor='department' className='col-5'>
                  Phòng Ban
                </Label>
                <Input
                  className='col-6 ml-3'
                  type='department'
                  id='department'
                  name='department'
                />
              </FormGroup>
              <FormGroup className='row'>
                <Label htmlFor='salaryScale' className='col-5'>
                  Hệ số lương
                </Label>
                <Input
                  className='col-6 ml-3'
                  type='salaryScale'
                  id='salaryScale'
                  name='salaryScale'
                />
              </FormGroup>
              <FormGroup className='row'>
                <Label htmlFor='annualLeave' className='col-5'>
                  Số ngày nghỉ còn lại
                </Label>
                <Input
                  className='col-6 ml-3'
                  type='annualLeave'
                  id='annualLeave'
                  name='annualLeave'
                />
              </FormGroup>
              <FormGroup className='row'>
                <Label htmlFor='overTime' className='col-5'>
                  Số ngày làm thêm
                </Label>
                <Input
                  className='col-6 ml-3'
                  type='overTime'
                  id='overTime'
                  name='overTime'
                />
              </FormGroup>
              <Button type='submit' value='submit' color='primary'>
                Thêm
              </Button>
            </Form>
          </ModalBody>
        </Modal>
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
