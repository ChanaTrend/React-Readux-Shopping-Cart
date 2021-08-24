import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, removeFromCart, reduceFromCart } from "../actions/cartActions";

class Cart extends Component {
  render() {

    let cartCount
    let subTotal

    const { cartItems } = this.props;

    //cart count depend on the number of items
    cartCount = cartItems.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.count;
    }, 0);

    //subtotal depend on the cart items
    subTotal = cartItems.reduce(function (sum, currentValue) {
      sum += currentValue.count * currentValue.details.price;
      return sum;
    }, 0);

    return (
      <div className="item drawer-style">
        {cartItems.length === 0 ? (
          <div className="ui grid">
            <div className="thirteen wide column">Your Cart is Empty</div>
          </div>
        ) : (
          <div className="row">
            <div className="col-md-10">You have {cartCount} items</div>
            <div className="col-md-2 cart-inside-drawer">
              <div className="shoppingbasket" >
                <div className="top"></div>
                <div className="bottom"></div>
                <div className="left"></div>
                <div className="right"></div>
                <div className="basketitems">{cartCount}</div>
              </div>
            </div>
          </div>
        )}
        {cartItems.length !== 0 && (
          <div className="ui divider"></div>
        )}
        {cartItems.length > 0 && (
          <div className="item">
            {cartItems.map((item) => (
              <div className="row cart-items" key={item.id}>
                <div className="col-md-5">* {item.name}</div>
                <div className="col-md-3">{item.count} X {item.details.price} $</div>
                <div className="col-md-3">
                  <div className="row">
                      <button disabled={item.count < 2} className="mini ui button">
                        <i className="minus icon curser-design"
                          onClick={(e) =>
                            this.props.reduceFromCart(this.props.cartItems, item)
                          }>
                        </i>
                      </button>
                    <label className="count-align">  {item.count}  </label>
                    <button className="mini ui button">
                      <i className="plus icon curser-design"
                        onClick={(e) =>
                          this.props.addToCart(this.props.cartItems, item)
                        }>
                      </i>
                    </button>
                  </div>
                </div>
                <div className="col-md-1">
                  <i className="trash alternate outline icon right red curser-design"
                    onClick={(e) =>
                      this.props.removeFromCart(this.props.cartItems, item)
                    }>
                  </i>
                </div>
              </div>
            ))}
          </div>

        )}
        {cartItems.length !== 0 && (
          <div className="ui divider"></div>
        )}
        {cartItems.length !== 0 && (
          <div className="row total-amount">
            <div className="col-md-5">Sub Total</div>
            <div className="col-md-3"> {subTotal} $</div>
          </div>
        )}
        {cartItems.length !== 0 && (
          <button className="ui button black checkout-btn" onClick={() => alert("Sorry, This is only for a Practical test by rootcodeLABS")}>Checkout</button>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products.filteredItems,
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { addToCart, removeFromCart, reduceFromCart })(Cart);
