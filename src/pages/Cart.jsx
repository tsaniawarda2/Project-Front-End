import { useEffect, useState } from "react";
import { CartState } from "../contexts/Context";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div className="home">
      <div className="productContainer">
        <ul className="list-group">
          {cart.map((product) => (
            <li className="list-group-item cartitem" key={product.id}>
              <div className="row">
                <div className="col-md-4">
                  <img src={product.image} alt={product.name} fluid rounded width="200" height="200" />
                </div>
                <div className="col-md-2">
                  <span>{product.name}</span>
                </div>
                <div className="col-md-2">IDR {product.price}</div>
                <div className="col-md-2">
                  <select form-control
                    as="select"
                    value={product.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: product.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(product.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-2">
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
                    <i className="fas fa-trash-alt"></i>
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
            <p>Full Name</p>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1"><i class="fas fa-id-card"></i></span>
            <input type="text" class="form-control" placeholder="Full Name" aria-label="name" aria-describedby="basic-addon1"/>
          </div>
            <p>Address</p>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1"><i class="fas fa-map-marked-alt"></i></span>
            <input type="text" class="form-control" placeholder="Address" aria-label="address" aria-describedby="basic-addon1"/>
          </div>
            <p>Phone Number</p>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1"><i class="fas fa-phone-alt"></i></span>
            <input type="text" class="form-control" placeholder="Phone Number" aria-label="number" aria-describedby="basic-addon1"/>
          </div>
          <form className="payment my-4">
						<h5>Choose Payment Method</h5>
							<div class="form-check form-check-inline">
								<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
								<label class="form-check-label" for="inlineRadio1">BCA</label>
							</div>
							<div class="form-check form-check-inline">
								<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
								<label class="form-check-label" for="inlineRadio2">BRI</label>
							</div>
							<div class="form-check form-check-inline">
								<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
								<label class="form-check-label" for="inlineRadio2">DANA</label>
								</div>
							<div class="form-check form-check-inline">
								<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
									<label class="form-check-label" for="inlineRadio2">GOPAY</label>
							</div>
						</form>
        </div>
        <span className="title" style={{fontSize: 20}}>Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: IDR {total}</span>
        <a className="btn btn-light" href="/" role="button" disabled={cart.length === 0}>
          Checkout
        </a>
      </div>
    </div>
  );
};

export default Cart;
