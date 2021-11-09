import React from "react";
import PropTypes from "prop-types";

export default function ListProduct(props) {
  const { data } = props;

  return (
    <div className="row justify-content-center">
      {data?.map((product, idx) => {
        return (
          <>
            <div className="col-md-4 gx-3 gy-5">
              <div className="card h-100 text-center" key={idx}>
                <img
                  className="card-img-top"
                  src={product.image}
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text price">IDR {product.price}</p>
                  <p className="card-text year">{product.year}</p>
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
