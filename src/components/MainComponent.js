import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }
  // lấy id của món ăn khi click vào
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    return (
      <div>
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu
          dishes={this.state.dishes}
          onClick={dishId => this.onDishSelect(dishId)} //lấy id món ăn từ Menu component khi click vào món ăn
        />
        <DishDetail
          dish={this.state.dishes.find(
            dish => dish.id === this.state.selectedDish // lọc món ăn có id trùng với id khi click vào món ăn
          )}
        />
      </div>
    );
  }
}

export default Main;
