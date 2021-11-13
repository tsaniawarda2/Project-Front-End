import React, { useContext } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import "../assets/styles/catalogs.css";
import Sold from "../assets/image/sold.png";
import { DataContext } from "../context/DataProduct";

export default function ListProduct(props) {
  const { data } = props;

  const {
    filterState: { sort },
  } = useContext(DataContext);

  // FILTER PRICE
  const transformProducts = () => {
    let sortedProducts = data;
    console.log(sortedProducts, "---------sorted");
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    return sortedProducts;
  };

  return (
    <div className="row justify-content-center">
      {transformProducts()?.map((product, idx) => {
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
                    className="btn btn-outline-primary"
                    disabled={!product.inStock}
                  >
                    {product.inStock ? (
                      <NavLink to={`/detail/${product?.id}`} className="link">
                        <span>Read More</span>
                      </NavLink>
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