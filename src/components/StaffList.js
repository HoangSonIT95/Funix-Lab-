import React from 'react';
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
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Loading } from './Loading';
import { FadeTransform } from 'react-animation-components';

// render từng nhân viên ra danh sách
function RenderStaff({ staff }) {
  return (
    <FadeTransform
      in
      transformProps={{
        exitTransform: 'scale(0.2) translateY(-50%)',
      }}
    >
      <Card className='mt-2'>
        <CardBody className='border border-success'>
          <Link to={`/nhanvien/${staff.id}`}>
            <CardImg src={staff.image} alt={staff.name} />
            <CardTitle className='text-center mt-1'>{staff.name}</CardTitle>
          </Link>
        </CardBody>
      </Card>
    </FadeTransform>
  );
}

class StaffList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keywords: '',
      isModalOpen: false,
    };
    this.onSearch = this.onSearch.bind(this);
  }

  // tìm kiếm nhân viên
  onSearch = event => {
    event.preventDefault();
    this.setState({ keywords: event.target.searchName.value });
    event.target.searchName.value = '';
  };

  // map từng phần tử từ props để render
  staffList = staffs =>
    staffs
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
    // hiển thị loading khi fetch data
    if (this.props.staffs.isLoading) {
      return (
        <div className='container'>
          <div className='row'>
            <Loading />
          </div>
        </div>
      );
    }
    // thông báo lỗi khi fetch data lỗi
    else if (this.props.staffs.errMess) {
      return (
        <div className='container'>
          <div className='row mt-2'>
            <h3 style={{ color: 'red' }}>{this.props.staffs.errMess}</h3>
          </div>
        </div>
      );
    }
    // render data
    else
      return (
        <div className='container mt-2'>
          <div className='row mt-2'>
            <div className='col-lg-8 col-md-4 col-sm-4'>
              <Breadcrumb>
                <h6>Danh Sách Nhân Viên</h6>
              </Breadcrumb>
            </div>

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
            {this.staffList(this.props.staffs.staffs).length > 0 ? (
              this.staffList(this.props.staffs.staffs)
            ) : (
              <h4
                style={{ marginLeft: '27%', color: 'red', marginBottom: '5%' }}
              >
                Không tìm thấy kết quả phù hợp
              </h4>
            )}
          </div>
        </div>
      );
  }
}

export default StaffList;
