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
  const [key, setKey] = useState('');

  const onChangeSearch = value => {
    setKey(value);
  };

  const onSearch = () => {
    setKeywords(key);
    setKey('');
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
        <div className='col-lg-7 col-md-6 col-sm-6'>
          <Breadcrumb>
            <h6>Danh Sách Nhân Viên</h6>
          </Breadcrumb>
        </div>

        <div className='col-lg-4 col-md-6 col-sm-6'>
          <InputGroup type='submit'>
            <Input
              placeholder='Tìm nhân viên'
              value={key}
              onChange={e => {
                onChangeSearch(e.target.value);
              }}
            />
            <Button type='submit' color='primary' onClick={onSearch}>
              <i className='fa fa-search' aria-hidden='true'></i>
              {staffList.length < props.staffs.length && key === ''
                ? ' Hiện Tất Cả'
                : ' Tìm Kiếm  '}
            </Button>
          </InputGroup>
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
