import { func } from 'prop-types';
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

// render từng món ăn
function RenderMenuItem({ dish, onClick }) {
  return (
    <Card onClick={() => onClick(dish.id)}>
      {' '}
      {/* click vào lấy ra id truyền cho Main component */}
      <CardImg width='100%' src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

const Menu = props => {
  // map từng phần tử để render
  const menu = props.dishes.map(dish => {
    return (
      <div className='col-12 col-md-5 m-1' key={dish.id}>
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });
  return (
    <div className='container'>
      <div className='row'>{menu}</div>
    </div>
  );
};

export default Menu;
