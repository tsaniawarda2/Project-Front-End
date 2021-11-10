import React from "react";
import PropTypes from "prop-types";
import "../../assets/css/Catalogs.css";
import Sold from "../../assets/image/sold.png";

export default function ListProduct(props) {
  const { data } = props;

  return (
    <div className="row justify-content-center">
      {data?.map((product, idx) => {
        return (
          <>
            <div className="col-md-4 gx-3 gy-5">
              <div className="card h-100 text-center" key={idx}>
                <div className="image-card">
                  <img
                    className="card-img-top"
                    src={product.image}
                    alt={product.name}
                  />

                  {product.inStock ? (
                    ""
                  ) : (
                    <img className="sold" src={Sold} alt="Sold" />
                  )}
                </div>

                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text price">IDR {product.price}</p>
                  <p className="card-text condition">{product.condition}</p>
                  <button
                    className="btn btn-primary"
                    disabled={!product.inStock}
                  >
                    {product.inStock ? (
                      <div>Add To Car</div>
                    ) : (
                      <div>Out of Stock</div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

ListProduct.propTypes = {
  data: PropTypes.array,
};
