import { useEffect, useState, useContext } from "react";
import { DataContext } from "../context/DataProduct";
import { Delete } from "@material-ui/icons";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/styles/cart.css";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { state: cart, dispatch } = useContext(DataContext);

  console.log(cart, "products");

  const [total, setTotal] = useState();

  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("total", total);

  useEffect(() => {
    setTotal(cart.cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  const login = localStorage.getItem("dataLogin");
  let statusLogin = false;
  if (login !== null) {
    statusLogin = true;
  }

  return (
    <>
      <Navbar />
      <div className="cart-body">
        <div className="cart-title">Your Cart</div>
        <div className="cart">
          <div className="productContainer">
            <ul className="list-group cartItem">
              {cart.cart.map((product) => (
                <li className="list-group-item" key={product.id}>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <NavLink to={`/detail/${product?.id}`}>
                        <img
                          className="cartItemImage"
                          src={product.image}
                          alt={product.name}
                        />
                      </NavLink>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 column-2">
                      <h4>{product.name}</h4>
                      <h5 className="price-cart">IDR {product.price}</h5>
                      <h6>{product.description}</h6>
                      <h6 className="condition">
                        <i class="fa fa-info-circle" aria-hidden="true"></i>{" "}
                        {product.condition}
                      </h6>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12 mt-4">
                      <button
                        className="btn btn-cart"
                        type="button"
                        variant="light"
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: product,
                          })
                        }
                      >
                        <Delete />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="summary">
            <div className="shipping">
              <h5 className="header-shipping">Shipping Details</h5>
            </div>
            <span className="title">
              Total Items: <span>{cart.cart.length} items</span>
            </span>
            <div className="product-details">
              {cart.cart.map((productPrice) => (
                <div className="product-detail">
                  <h5>{productPrice.name}</h5>
                  <h5>{productPrice.price}</h5>
                </div>
              ))}
            </div>
            <hr></hr>
            <span className="total-price">
              {" "}
              Total:
              <span>IDR {total}</span>
            </span>
            {statusLogin ? (
              <NavLink
                className="btn btn-checkout"
                to="/checkout"
                role="button"
              >
                Checkout
              </NavLink>
            ) : (
              <>
                <NavLink
                  className="btn btn-checkout-disabled"
                  to="/checkout"
                  role="button"
                >
                  Checkout
                </NavLink>
                <p className="link-cart">
                  You must login before checkout your items.{" "}
                  <NavLink to="/login" className="log-he">
                    Login here
                  </NavLink>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
