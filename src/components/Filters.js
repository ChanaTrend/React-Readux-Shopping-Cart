import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProducts, sortProducts } from "../actions/productActions";

//array for filter by sizes
const availableSizes = [
  { name: "ALL", value: "" },
  { name: "XS", value: "xsmall" },
  { name: "S", value: "small" },
  { name: "M", value: "m" },
  { name: "L", value: "large" },
  { name: "XXL", value: "xxl" }
]

class Filters extends Component {
  render() {
    return (
      <div className="row">
          <div className="col-md-2">{`${this.props.filteredProducts.length} product(s) found.`}</div>
          <div className="col-md-5">
            <div className="row filter-styles">
              <div className="col-md-2">Sizes:</div>
              <div className="col-md-10">
                {availableSizes.map((data) => (
                  <span className="dot" key={data.value} id={data.value} onClick={(event) => {
                    this.props.filterProducts(
                      this.props.products,
                      event.target.id
                    );
                  }}>{data.name}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-3 orderby-style">Order By:</div>
              <div className="col-md-9">
                <select
                  className="form-control"
                  value={this.props.sort}
                  onChange={(event) => {
                    this.props.sortProducts(
                      this.props.filteredProducts,
                      event.target.value
                    );
                  }}
                >
                  <option value="">Select</option>
                  <option value="lowestprice">Lowest To Highest</option>
                  <option value="highestprice">Highest To Lowest</option>
                </select>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products.items,
  filteredProducts: state.products.filteredItems,
  size: state.products.size,
  sort: state.products.sort,
});
export default connect(mapStateToProps, { filterProducts, sortProducts })(
  Filters
);
