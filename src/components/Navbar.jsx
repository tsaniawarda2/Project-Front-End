import React, { useContext } from "react";

import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined, Delete } from "@material-ui/icons";
import { NavLink } from "react-router-dom";

import { DataContext } from "../context/DataProduct";

import "../assets/styles/navbar.css";

export default function Navbar() {
  const { state: cart, dispatch } = useContext(DataContext);

  // const handleCart = () =>{
  //   localStorage.setItem("carts", JSON.stringify(cart))
  // }
  //   const userCarts = JSON.parse(localStorage.getItem("carts"))
  //   // const userCart = JSON.parse(userCarts)
  //   console.log(userCarts, "usercart");

  // const checkLogin = () => {
  //   if(isLogin()) {

  //       loginBtnEl.classList.add('d-none');
  //       accountMenuEl.classList.remove('d-none');
  //   }
  // };

  // const logout = () => {
  //   localStorage.removeItem('login');
  //   location.reload();
  // };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm fixed-top">
        <div className="container">
          <NavLink exact className="navbar-brand fw-bold fs-4 logo" to="/">
            <h1>BuyMePlease</h1>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0" id="nav-top">
              <li className="nav-item">
                <NavLink exact className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/catalogs">
                  Catalogs
                </NavLink>
              </li>
            </ul>
            <div className="right row">
              

              <div className="cart-nav dropdown col">
                <button
                  class="btn cart-icon"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <Badge badgeContent={cart.cart.length} color="primary">
                    <ShoppingCartOutlined />
                  </Badge>
                </button>
                <div
                  className="dropdown-menu dropdown-menu-right pull-right"
                  aria-labelledby="dropdownMenuButton"
                  style={{ minWidth: 300 }}
                >
                  {cart.cart.length > 0 ? (
                    <>
                      {cart.cart.map((product) => (
                        <span className="cartitem" key={product.id}>
                          <img
                            src={product.image}
                            className="cartItemImg"
                            alt={product.name}
                          />
                          <div className="cartItemDetail">
                            <span>{product.name}</span>
                            <span>IDR {product.price}</span>
                          </div>
                          <Delete
                            fontSize="20px"
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: product,
                              })
                            }
                          />
                        </span>
                      ))}
                      <NavLink to="/cart">
                        <button
                          className="btn btn-dark"
                          style={{ width: "95%", margin: "0 10px" }}
                          // onClick={handleCart()}
                        >
                          Go To Cart
                        </button>
                      </NavLink>
                    </>
                  ) : (
                    <span style={{ padding: 10 }}>Cart is Empty!</span>
                  )}
                </div>
              </div>
              <NavLink to="/login" className="signin me-3 col">
                Sign In
              </NavLink>

              <NavLink to="/register" className="signup me-3 col">
                Sign Up
              </NavLink>
              <div class="d-none" id="account-menu">
                <div class="nav">
                    <a href="#" id="confirmLogout" data-bs-toggle="modal" data-bs-target="#exampleModal">Logout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}