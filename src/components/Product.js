import { CartState } from "../contexts/Context";

const Product = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="products">
      <div className="card">
        <img className="card-img" variant="top" src={product.image} alt={product.name}/>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <h6 className="card-subtitle" style={{ paddingBottom: 10 }}>
            <span>IDR {product.price.split(".")[0]}</span>
          </h6>
          {cart.some((p) => p.id === product.id) ? (
            <button className="btn btn-danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: product,
                })
              }
            >
              Remove from Cart
            </button>
          ) : (
            <button className="btn btn-dark"
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: product,
                })
              }
              disabled={!product.inStock}
            >
              {!product.inStock ? "Out of Stock" : "Add to Cart"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
