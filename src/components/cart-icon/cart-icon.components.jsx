import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCart }) => (
  <div className='cart-icon' onClick={toggleCart}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);