import { ADD_TO_CART, REMOVE_FROM_CART, REDUCE_FROM_CART } from "./types";

//add items to cart
export const addToCart = (items, product) => (dispatch) => {
  const cartItems = items.slice();
  let productAlreadyInCart = false;

  cartItems.forEach((cp) => {
    if (cp.id === product.id) {
      cp.count += 1;
      productAlreadyInCart = true;
    }
  });

  if (!productAlreadyInCart) {
    cartItems.push({ ...product, count: 1 });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: ADD_TO_CART, payload: { cartItems } });
};

//reduce items to cart
export const reduceFromCart = (items, product) => (dispatch) => {
  const cartItems = items.slice();

  cartItems.forEach((cp) => {
    if (cp.id === product.id) {
      cp.count -= 1;
    }
  });

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: REDUCE_FROM_CART, payload: { cartItems } });
};

//remove items from cart
export const removeFromCart = (items, product) => (dispatch) => {
  const cartItems = items.slice().filter((a) => a.id !== product.id);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
};
