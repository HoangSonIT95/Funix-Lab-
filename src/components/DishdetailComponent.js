import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';
import dateFormat from 'dateformat';

export default class DishDetail extends Component {
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
          <div className='m-2'>
            <CardText>{comment.comment}</CardText>
            <CardText>
              -- {comment.author}, {dateFormat(comment.date, 'mmm dd, yyyy')}
            </CardText>
          </div>
        );
      });
      return (
        <div className='col-12 col-md-5 m-1'>
          <h4>Comments</h4>
          <div>{comment}</div>
        </div>
      );
    } else return <div></div>;
  }
  render() {
    return (
      <div className='container'>
        <div className='row'>
          {this.renderDish(this.props.dishes)}
          {this.renderComments(this.props.dishes)}
        </div>
      </div>
    );
  }
}
