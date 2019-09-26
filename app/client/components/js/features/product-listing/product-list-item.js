import React from 'react';
import AddBtn from './add-btn';
import RemoveBtn from './remove-btn';

export default function ProductListItem(props) {
  // const thisItemInCart = props.cart.filter(item => item.id === props.id)[0];
  return (
    <div className="product-list-item">
      <h3>{props.title}</h3>
      <img
        height={100}
        title={props.name}
        src={`/products/${props.image}`}
      />
      <div>{props.description}</div>
      <div>${(props.price).toFixed(2)}</div>
      <div>
        <AddBtn
          cartItem={props.cartItem}
          product={props}
          addToCart={props.addToCart}
        />

        {
          props.cartItem
            ? <RemoveBtn
              cartItem={props.cartItem}
              removeFromCart={props.removeFromCart}
            />
            : null

        }

      </div>
    </div>
  );
}
