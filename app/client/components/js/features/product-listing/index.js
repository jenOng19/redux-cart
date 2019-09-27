import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductListItem from './product-list-item';
// import { cartItemsWithQuantity } from '../cart';

class ProductListing extends Component {
  render() {
    const { products } = this.props;
    const productElements = products.map(product => {
      return <ProductListItem
        key={product.id}
        {...product}
        addToCart={this.props.addToCart}
        removeFromCart={this.props.removeFromCart}
        cartItem={this.props.cart.filter(cartItem => cartItem.id === product.id)[0]}/>;
    });

    return (
      <div className="product-listing">
        {productElements}

      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch => ({
  addToCart: item => {
    dispatch({ type: 'ADD', payload: item });
  },
  removeFromCart: item => {
    dispatch({ type: 'REMOVE', payload: item });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);
