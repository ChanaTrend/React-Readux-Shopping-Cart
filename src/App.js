import React, { Component } from "react";
import { Provider } from "react-redux";
import Products from "./components/Products";
import Filters from "./components/Filters";
import Cart from "./components/Cart";
import HomeCart from "./components/LandingpageCart";
import store from "./store";
import "./App.css";

class App extends Component {

  //prevent opening when refresh the page
  componentDidMount() {
    this.closeNav();
  }

  //open drawer
  openNav() {
    document.getElementById("mySidenav").style.width = "50%" //opens side navbar by 70 percent
    document.getElementById('backdrop').style.display = "block" //displays overlay
  }

  //close drawer
  closeNav() {
    document.getElementById("mySidenav").style.width = "0"
    document.getElementById('backdrop').style.display = "none"
  }

  render() {
    return (
      <Provider store={store}>
        <div style={{ margin: "50px" }}>
          <h1>Root Code Labs Shopping Cart</h1>
          <div className="ui divider"></div>
          <div className="row">

            <div className="col-md-11 home-product-section">
              <Filters />
              <div className="ui divider"></div>
              <div className="ui grid container">
                <Products />
              </div>
            </div>

            <div className="col-md-1 curser-design" onClick={this.openNav}>
              <HomeCart />
            </div>

            <div id="mySidenav" className="sidenav-container">
              <span className="drawer-close-button">
                <a href="/#" className="closebtn" onClick={this.closeNav}>&times;</a>
              </span>
              <Cart />
            </div>
            <div className="backdrop-container" id="backdrop"></div>

          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
