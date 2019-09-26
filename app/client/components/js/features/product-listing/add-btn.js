import React from 'react';

export default function AddButton(props) {
  return (
    <button onClick={() => props.addToCart(props.product)}>Add to cart({
      // (thisItemInCart && thisItemInCart.quantity) || 0
      (props.cartItem && props.cartItem.quantity) || 0
    })
    </button>
  );
}
