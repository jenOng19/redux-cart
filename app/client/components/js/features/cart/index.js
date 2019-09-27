/* eslint-disable react/jsx-key */
import React from 'react';
import { connect } from 'react-redux';

function sort(items) {
  return items.sort((a, b) => a.id - b.id);
}
function Cart(props) {
  const cartElements = sort(props.cart).map(item =>
    <tr>
      <td>{item.title}</td>
      <td>{item.quantity}</td>
      <td>
        <button onClick={() => props.addToCart(item)}>+</button>
        <button onClick={() => props.removeFromCart(item)}>-</button>
      </td>
      <td>
        <button onClick={() => props.removeAllFromCart(item)}>Remove all from cart</button>
      </td>
    </tr>
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cartElements}
      </tbody>
    </table>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: item => {
      dispatch({ type: 'ADD', payload: item });
    },
    removeFromCart: item => {
      dispatch({ type: 'REMOVE', payload: item });
    },
    removeAllFromCart: item => {
      dispatch({ type: 'REMOVE_ALL', payload: item });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

// accumulator start with empty array
// return acc so that you have it for the next step
