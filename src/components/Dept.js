import React from 'react';
import { Card, CardText, CardTitle, CardBody } from 'reactstrap';

function RenderDept(props) {
  return (
    <Card className='mt-3 mb-3'>
      <CardTitle className='m-2 ml-3'>{props.dept.name}</CardTitle>
      <CardBody>
        <CardText>Số Lượng Nhân Viên: {props.dept.numberOfStaff}</CardText>
      </CardBody>
    </Card>
  );
}

const Dept = props => {
  // map từng phần tử trong props
  const departments = props.dept.map(dept => {
    return (
      <div className='col-lg-4 col-md-5' key={dept.id}>
        {/* truyền từng phần tử vào RenderDept để render */}
        <RenderDept dept={dept} />
      </div>
    );
  });
  return (
    <div className='container'>
      <div className='row'>{departments}</div>
    </div>
  );
};

export default Dept;
