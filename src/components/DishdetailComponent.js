import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import dateFormat from 'dateformat';

/* export default class DishDetail extends Component {
  renderDish(dish) {
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

  renderComments(dish) {
    if (dish != null) {
      const comment = dish.comments.map(comment => {
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
  render() {
    return (
      <div className='container'>
        <div className='row'>
          {this.renderDish(this.props.dish)}
          {this.renderComments(this.props.dish)}
        </div>
      </div>
    );
  }
} */

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

function RenderComments({ comments }) {
  if (comments != null) {
    const comment = comments.comments.map(comment => {
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

const DishDetail = props => {
  console.log(props.dish);
  return (
    <div className='container'>
      <div className='row'>
        <RenderDish dish={props.dish} />
        <RenderComments comments={props.dish} />
      </div>
    </div>
  );
};

export default DishDetail;
