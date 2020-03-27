import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCart, itemsCount }) => (
  <div className='cart-icon' onClick={toggleCart}>
    <ShoppingIcon className='shopping-icon' />
<span className='item-count'>{itemsCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCartHidden())
});

const mapStateToProps = ({ cart: {cartItems} }) => ({
  itemsCount: cartItems.reduce((acc,c) => acc + c.quantity, 0)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);