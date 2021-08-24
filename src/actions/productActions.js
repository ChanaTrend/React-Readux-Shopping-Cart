import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_SIZE,
  ORDER_PRODUCTS_BY_PRICE,
} from "./types";

//get data from the url
export const fetchProducts = () => (dispatch) => {
  fetch("https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments")
    .then((res) => res.json())
    .catch((err) =>
      console.log(`Data is not fetching for the store because of ${err}`)
    )
    .then((data) => {
      dispatch({ type: FETCH_PRODUCTS, payload: data });
    });
};

//filter by specific sizes
export const filterProducts = (products, size) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS_BY_SIZE,
    payload: {
      size: size,
      items:
        size === ""
          ? products
          : products.filter(
            (x) => x.details.size === size
          ),
    },
  });
};

//sort by prices
export const sortProducts = (items, sort) => (dispatch) => {
  const products = items.slice();
  if (sort !== "") {
    products.sort((a, b) =>
      sort === "lowestprice"
        ? a.details.price > b.details.price
          ? 1
          : -1
        : a.details.price < b.details.price
          ? 1
          : -1
    );
  } else {
    products.sort((a, b) => (a.id > b.id ? 1 : -1));
  }
  dispatch({
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: products,
    },
  });
};
