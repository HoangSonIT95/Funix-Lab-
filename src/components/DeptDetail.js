import React, { useEffect } from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';
import { Loading } from './Loading';

function RenderStaffInDept({ staffInDept }) {
  return (
    <FadeTransform
      in
      transformProps={{
        exitTransform: 'scale(0.2) translateY(-50%)',
      }}
    >
      <Card className='mt-2'>
        <CardBody className='border border-success'>
          <Link to={`/nhanvien/${staffInDept.id}`}>
            <CardImg src={staffInDept.image} alt={staffInDept.name} />
            <CardTitle className='text-center mt-1'>
              {staffInDept.name}
            </CardTitle>
          </Link>
        </CardBody>
      </Card>
    </FadeTransform>
  );
}

function StaffsInDept(props) {
  useEffect(() => {
    props.fetchStaffInDept(props.deptId); //dispatch action in actioncreator with use dispatch
  }, []);
  console.log(props);
  if (props.staffsInDept.isLoading) {
    return (
      <div className='container'>
        <div className='row'>
          <Loading />
        </div>
      </div>
    );
  } else if (props.staffsInDept.errMess) {
    return (
      <div className='container'>
        <div className='row mt-2'>
          <h3 style={{ color: 'red' }}>{this.props.staffs.errMess}</h3>
        </div>
      </div>
    );
  } else {
    const staffsInDept = props.staffsInDept.staffsInDept.map(staff => {
      return (
        <div className='col-lg-2 col-md-4 col-6' key={staff.id}>
          <RenderStaffInDept staffInDept={staff} />
        </div>
      );
    });
    return (
      <div className='container'>
        <div className='row'>{staffsInDept}</div>
      </div>
    );
  }
}

export default StaffsInDept;
