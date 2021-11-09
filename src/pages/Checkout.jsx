import React from "react"
import { useState, useEffect } from "react";
import { CartState } from "../context/Context";

const Checkout = () => {
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

    return(
        <div className="checkout">
					<div className="checkout-title mx-5 mt-5">
						<h3><b>Checkout</b></h3>
					</div>
					<div className="row container-fluid">
						<div className="col-md-8">
							<div class="card">
								<h5 class="card-header">Shipping Address</h5>
								<div class="card-body">
									<h5 class="card-title">Devi Ayu Lestari</h5>
									<h6 class="card-title">081573081234</h6>
									<p class="card-text">Jl. GA Mawar Melati Rt. 99 Rw.00, Kab. Bandung Barat, Jawa Barat. 40553</p>
									<a href="#" class="btn btn-primary">Change</a>
								</div>
							</div>

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
													</button>
												</div>
											</div>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="col-md-4">
							<div class="card">
								<h5 class="card-header">Shopping Summary</h5>
								<div class="card-body">
								<table class="table table-borderless">
										<tr>
											<td>Product Item (1)</td>
											<td>IDR 100.000</td>
										</tr>
										<tr>
											<td>Shipping Cost</td>
											<td>IDR. 15.000</td>
										</tr>
										<tr>
											<td><b>Total</b></td>
											<td><b>IDR. {total}</b></td>
										</tr>
								</table>
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
									<button class="btn btn-primary" style={{width: "100%"}}>Pay</button>
								</div>
							</div>
						</div>
					</div>
        </div>
    )
}

export default Checkout