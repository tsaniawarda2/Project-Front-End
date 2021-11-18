import { useParams } from "react-router";
import { useContext } from "react";

import "../assets/styles/detail.css";

import { DataContext } from "../context/DataProduct";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Detail = () => {
  const {
    state: { cart },
    dispatch,
  } = useContext(DataContext);

  const { data } = useContext(DataContext);

  let { id } = useParams();

  const product = data?.find((data) => data?.id === id);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className=" row wrapper">
          <div className="col-lg-4 col-md-12">
            <div className="pict">
              <div className="image-container text-center">
                <img src={product?.image} alt={product?.name} id="detail-img" />
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="info">
              <h1>{product?.name}</h1>
              <div className="title-desc">DESCRIPTION</div>
              <div className="first-decs">{product?.description}</div>
              <div className="second-decs">
                Price :
                <span className="detail-price">IDR {product?.price}</span>
              </div>
              <div className="second-decs">
                Last Buy :<span className="detail-price">{product?.date}</span>
              </div>
              <div className="second-decs">
                Condition :
                <span className="detail-price">{product?.condition}</span>
              </div>

              <div className="add-container">
                {cart.some((p) => p.id === product.id) ? (
                  <button
                    className="btn btn-danger"
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
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: product,
                      });
                    }}
                    disabled={!product.inStock}
                  >
                    {!product.inStock ? "Out of Stock" : "Add to Cart"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
