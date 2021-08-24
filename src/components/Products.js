import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { fetchProducts } from "../actions/productActions";
class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const productItems = this.props.products.map((product) => (
      <div className="four wide column" key={product.id} style={{marginBottom:"20px"}}>
        <div className="ui link cards">
          <div className="card" style={{minHeight:"580px", maxHeight:"580px"}}>
            <div className="image">
              <img src={product.details.image} alt={product.name} />
            </div>
            <div className="content product-data">
              <div className="header">{product.name}</div>
              <div className="ui divider"></div>
              <div className="header product-price">$ {product.details.price}</div>
              <button className="ui button black add-to-cart-button" onClick={(e) => this.props.addToCart(this.props.cartItems, product)}>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    ));

    return <div className="row">{productItems}</div>;
  }
}
const mapStateToProps = (state) => ({
  products: state.products.filteredItems,
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);
