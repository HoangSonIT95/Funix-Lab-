import React, { useState } from 'react';
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  Input,
  Button,
  Breadcrumb,
  Form,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Col,
  FormFeedback,
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

class StaffList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      doB: '',
      salaryScale: 1,
      startDate: '',
      department: 'Sale',
      annualLeave: 0,
      overTime: 0,
      image: '/assets/images/girl.jpg',
      touched: {
        name: false,
        doB: false,
        startDate: false,
        department: false,
        salaryScale: false,
        annualLeave: false,
        overTime: false,
      },
      keywords: '',
      isModalOpen: false,
    };
    this.onSearch = this.onSearch.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  onSearch = event => {
    event.preventDefault();
    this.setState({ keywords: event.target.searchName.value });
  };

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }
  handleBlur = field => event => {
    this.setState({ touched: { ...this.state.touched, [field]: true } });
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }
  handleSubmit = event => {
    //validate input value
    if (this.state.name === '') {
      alert('Vui lòng điền Họ Tên nhân viên');
      event.preventDefault();
    } else if (this.state.doB === '') {
      alert('Vui lòng nhập ngày sinh của nhân viên');
      event.preventDefault();
    } else if (this.state.startDate === '') {
      alert('Vui lòng nhập ngày vào công ty của nhân viên');
      event.preventDefault();
    } else if (this.state.salaryScale === '') {
      alert('Vui lòng nhập ngày hệ số lương của nhân viên');
      event.preventDefault();
    } else if (this.state.annualLeave === '') {
      alert('Vui lòng nhập số ngày phép còn lại của nhân viên');
      event.preventDefault();
    } else if (this.state.overTime === '') {
      alert('Vui lòng nhập số giờ làm thêm của nhân viên');
      event.preventDefault();
    } else {
      event.preventDefault();
      this.toggleModal();
      // lấy dữ liệu tạo nhân viên mới
      const newStaff = {
        name: this.state.name,
        doB: this.state.doB,
        salaryScale: this.state.salaryScale,
        startDate: this.state.startDate,
        department: this.state.department,
        annualLeave: this.state.annualLeave,
        overTime: this.state.overTime,
        image: this.state.image,
      };
      // thêm nhân viên mới vào hàm onAdd callback
      this.props.onAdd(newStaff);
    }
  };

  validate(
    name,
    doB,
    startDate,
    department,
    salaryScale,
    annualLeave,
    overTime
  ) {
    const errors = {
      name: '',
      doB: '',
      startDate: '',
      department: '',
      salaryScale: '',
      annualLeave: '',
      overTime: '',
    };
    if (this.state.touched.name && name.length < 3)
      errors.name = 'Họ Tên phải nhiều hơn 3 ký tự';
    else if (this.state.touched.name && name.length > 30)
      errors.name = 'Họ Tên phải ít hơn 30 ký tự';
    if (this.state.touched.doB && doB.length < 1)
      errors.doB = 'Vui lòng chọn ngày sinh';
    if (this.state.touched.startDate && startDate.length < 1)
      errors.startDate = 'Vui lòng chọn ngày vào công ty';
    if (this.state.touched.department && department.length < 1)
      errors.department = 'Vui lòng chọn phòng ban';
    if (this.state.touched.salaryScale && salaryScale.length < 1)
      errors.salaryScale = 'Vui lòng nhập hệ số lương';
    if (this.state.touched.annualLeave && annualLeave.length < 1)
      errors.annualLeave = 'Vui lòng nhập ngày phép còn lại';
    if (this.state.touched.overTime && overTime.length < 1)
      errors.overTime = 'Vui lòng nhập số giờ tăng ca';
    return errors;
  }

  // map từng phần tử từ props để render
  staffList = props =>
    props
      .filter(staff => {
        return staff.name
          .toUpperCase()
          .includes(this.state.keywords.toUpperCase());
      })
      .map(staff => {
        return (
          <div key={staff.id} className='col-lg-2 col-md-4 col-6'>
            <RenderStaff staff={staff} />
          </div>
        );
      });

  render() {
    const errors = this.validate(
      this.state.name,
      this.state.doB,
      this.state.startDate,
      this.state.department,
      this.state.salaryScale,
      this.state.annualLeave,
      this.state.overTime
    );

    return (
      <div className='container mt-2'>
        <div className='row mt-2'>
          <div className='col-lg-5 col-md-4 col-sm-4'>
            <Breadcrumb>
              <h6>Danh Sách Nhân Viên</h6>
            </Breadcrumb>
          </div>
          <div className='col-lg-3 col-md-4 col-sm-4'>
            <Button color='primary' onClick={this.toggleModal}>
              Thêm Nhân Viên
            </Button>
          </div>
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader>Thêm Nhân Viên Mới</ModalHeader>
            <ModalBody>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                  <Label htmlFor='name' className='col-5'>
                    Họ và Tên
                  </Label>
                  <Col className='col-7 '>
                    <Input
                      type='text'
                      id='name'
                      name='name'
                      value={this.state.name}
                      valid={errors.name === ''}
                      invalid={errors.name !== ''}
                      onBlur={this.handleBlur('name')}
                      onChange={this.handleInputChange}
                    />
                    <FormFeedback>{errors.name}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor='doB' className='col-5'>
                    Ngày sinh
                  </Label>
                  <Col className='col-7 '>
                    <Input
                      type='date'
                      id='doB'
                      name='doB'
                      value={this.state.doB}
                      valid={errors.doB === ''}
                      invalid={errors.doB !== ''}
                      onBlur={this.handleBlur('doB')}
                      onChange={this.handleInputChange}
                    />
                    <FormFeedback>{errors.doB}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor='startDate' className='col-5'>
                    Ngày vào công ty
                  </Label>
                  <Col className='col-7 '>
                    <Input
                      type='date'
                      id='startDate'
                      name='startDate'
                      value={this.state.startDate}
                      valid={errors.startDate === ''}
                      invalid={errors.startDate !== ''}
                      onBlur={this.handleBlur('startDate')}
                      onChange={this.handleInputChange}
                    />
                    <FormFeedback>{errors.startDate}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor='department' className='col-5'>
                    Phòng Ban
                  </Label>
                  <Col className='col-7 '>
                    <Input
                      type='select'
                      id='department'
                      name='department'
                      value={this.state.department}
                      valid={errors.department === ''}
                      invalid={errors.department !== ''}
                      onBlur={this.handleBlur('department')}
                      onChange={this.handleInputChange}
                    >
                      <option>Sale</option>
                      <option>HR</option>
                      <option>Marketing</option>
                      <option>IT</option>
                      <option>Finance</option>
                    </Input>
                    <FormFeedback>{errors.department}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor='salaryScale' className='col-5'>
                    Hệ số lương
                  </Label>
                  <Col className='col-7 '>
                    <Input
                      type='number'
                      id='salaryScale'
                      name='salaryScale'
                      value={this.state.salaryScale}
                      valid={errors.salaryScale === ''}
                      invalid={errors.salaryScale !== ''}
                      onBlur={this.handleBlur('salaryScale')}
                      onChange={this.handleInputChange}
                    />
                    <FormFeedback>{errors.salaryScale}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor='annualLeave' className='col-5'>
                    Số ngày nghỉ còn lại
                  </Label>
                  <Col className='col-7 '>
                    <Input
                      type='number'
                      id='annualLeave'
                      name='annualLeave'
                      value={this.state.annualLeave}
                      valid={errors.annualLeave === ''}
                      invalid={errors.annualLeave !== ''}
                      onBlur={this.handleBlur('annualLeave')}
                      onChange={this.handleInputChange}
                    />
                    <FormFeedback>{errors.annualLeave}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor='overTime' className='col-5'>
                    Số ngày làm thêm
                  </Label>
                  <Col className='col-7 '>
                    <Input
                      type='number'
                      id='overTime'
                      name='overTime'
                      value={this.state.overTime}
                      valid={errors.overTime === ''}
                      invalid={errors.overTime !== ''}
                      onBlur={this.handleBlur('overTime')}
                      onChange={this.handleInputChange}
                    />
                    <FormFeedback>{errors.overTime}</FormFeedback>
                  </Col>
                </FormGroup>

                <Button type='submit' value='submit' color='primary'>
                  Thêm
                </Button>
              </Form>
            </ModalBody>
          </Modal>
          <div className='col-lg-4 col-md-4 col-sm-4'>
            <Form className='row' type='submit' onSubmit={this.onSearch}>
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
          {this.staffList(this.props.staffs).length > 0 ? (
            this.staffList(this.props.staffs)
          ) : (
            <h4 style={{ marginLeft: '27%', color: 'red', marginBottom: '5%' }}>
              Không tìm thấy kết quả phù hợp
            </h4>
          )}
        </div>
      </div>
    );
  }
}
export default StaffList;
