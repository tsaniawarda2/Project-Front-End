import { useEffect, useState, useContext } from "react";
import { DataContext } from "../context/DataProduct";
import { Delete } from "@material-ui/icons";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../assets/styles/cart.css"

const Cart = () => {
  const {
    state: cart,
    dispatch
  } = useContext(DataContext)

  console.log(cart, "products");

  const [total, setTotal] = useState();
  // const [cartLocal, setCartLocal] = useState();

  localStorage.setItem("cart", JSON.stringify(cart))
  localStorage.setItem("total", total)

  useEffect(() => {
    setTotal(
      cart.cart.reduce((acc, curr) => acc + Number(curr.price), 0)
    );
  }, [cart]);

  return (
    <>
    <Navbar/>
    <div className="home">
      <div className="productContainer">
        <ul className="list-group cart-item">
          {cart.cart.map((product) => (
            <li className="list-group-item" key={product.id}>
              <div className="row">
                <div className="col-md-3">
                  <img className="cartItemImage" src={product.image} alt={product.name}/>
                </div>
                <div className="col-md-5 mt-4">
                  <h4>{product.name}</h4>
                  <h6>
                    {product.description}
                  </h6>
                  <h6>Condition: <span> </span> {product.condition}</h6>
                </div>
                <h5 className="col-md-2 mt-4">IDR {product.price}</h5>
                <div className="col-md-2 mt-4">
                  <button className="btn btn-dark"
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: product,
                      })
                    }
                  >
                    <Delete/>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="filters summary">
        <div className="shipping-form">
          <h5>Shipping Details</h5>
        </div> 
        <span className="title" style={{fontSize: 20}}>Total Items:  {cart.cart.length} items</span>
        <div>
          {cart.cart.map((productPrice) => (
            <>
            <h5>{productPrice.name}</h5>
            <h5>{productPrice.price}</h5>
            </>
          ))}
        </div>

        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: IDR {total}</span>
        <a className="btn btn-light" href="/checkout" role="button" disabled={cart.cart.length === 0}>
          Checkout
        </a>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Cart;
