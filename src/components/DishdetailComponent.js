import React from 'react';
import dateFormat from 'dateformat';

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

// render chi tiết món ăn
function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <div className='col-12 col-md-5 m-1'>
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  } else return <div></div>;
}

// render bình luận món ăn
function RenderComments({ comments }) {
  if (comments != null) {
    const comment = comments.map(comment => {
      return (
        <div className='m-4'>
          <CardText>{comment.comment}</CardText>
          <CardText>
            -- {comment.author}, {dateFormat(comment.date, 'mmm dd, yyyy')}
          </CardText>
        </div>
      );
    });
    return (
      <div className='col-12 col-md-5 m-1'>
        <h4 className='mt-3'>Comments</h4>
        <div>{comment}</div>
      </div>
    );
  } else return <div></div>;
}

// nhận món ăn từ Main component sau khi lấy được id thì lọc món ăn trùng id
const DishDetail = props => {
  return (
    <div className='container'>
      <div className='row'>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to='/menu'>Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className='col-12'>
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className='row'>
        <RenderDish dish={props.dish} />
        <RenderComments comments={props.comments} />
      </div>
    </div>
  );
};

export default DishDetail;
