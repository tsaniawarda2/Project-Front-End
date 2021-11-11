import React from "react";

import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { NavLink } from "react-router-dom";

import "../assets/css/navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink exact className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="./catalogs">
                  Catalogs
                </NavLink>
              </li>
            </ul>
            <div className="right row">
              <NavLink to="./login" className="login me-3 col">
                Login
              </NavLink>

              <NavLink to="./register" className="register me-3 col">
                Register
              </NavLink>

              <NavLink to="./cart" className="cart col">
                <Badge badgeContent={4} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
