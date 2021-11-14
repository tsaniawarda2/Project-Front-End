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
    <>
      <div className="row justify-content-center">
        {transformProducts()
          ?.filter((stock) => stock.inStock)
          .map((product, idx) => {
            return (
              <>
                <div className="col-md-4 gx-3 gy-5 in-stock">
                  <NavLink to={`/detail/${product?.id}`} className="link">
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
                        <p className="card-text condition">
                          {product.condition}
                        </p>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </>
            );
          })}
        {transformProducts()
          ?.filter((stock) => !stock.inStock)
          .map((product, idx) => {
            return (
              <>
                <div className="col-md-4 gx-3 gy-5 out-stock">
                  <NavLink to={`/detail/${product?.id}`} className="link">
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
                        <p className="card-text condition">
                          {product.condition}
                        </p>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}

ListProduct.propTypes = {
  data: PropTypes.array,
};
