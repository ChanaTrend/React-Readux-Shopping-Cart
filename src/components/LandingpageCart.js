import React from 'react';
import { useSelector } from "react-redux";

const HomeCart = () => {

    //get item count for cart
    const count = useSelector((state) => state.cart.items);

    let cartCount
    
    cartCount = count.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue.count;
    }, 0);

    return (
        <div className="item">
            <div className="col-md-2">
                <div className="shoppingbasket" >
                    <div className="top"></div>
                    <div className="bottom"></div>
                    <div className="left"></div>
                    <div className="right"></div>
                    <div className="basketitems">{cartCount}</div>
                </div>
            </div>
        </div>
    );

}

export default HomeCart;