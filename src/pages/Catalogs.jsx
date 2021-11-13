import React, { useEffect, useState } from "react";
import { BASEURL } from "../config/api";
import ListProduct from "./filter/ListProduct";

const categories = ["All", "Fashion", "Furniture", "Electronics"];
const condition = ["Excellent", "Very good", "Good", "Moderate"];

export default function Catalogs() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [activeTabs, setActiveTabs] = useState(0);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(`${BASEURL}/products`);
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return <>Loading...</>;
  };

  // FILTER PRODUCT
  const filterProduct = (idx) => {
    setActiveTabs(idx);
    if (idx === 0) {
      setFilter(data);
    } else {
      const cat = categories[idx].toLowerCase();
      const updateList = data?.filter((product) => product.category === cat);
      setFilter(updateList);
    }
  };

  // FILTER CONDITION
  const filterCondition = (cdn) => {
    let currProducts = [];
    if (activeTabs === 0) {
      currProducts = data;
    } else {
      const cat = categories[activeTabs].toLowerCase();
      const updateList = data.filter((product) => product.category === cat);
      currProducts = updateList;
    }

    const updateList = currProducts?.filter(
      (product) => product.condition === cdn.toLowerCase()
    );
    setFilter(updateList);
  };

  // TAB
  const FilterTab = () => {
    return (
      <>
        <ul className="categories nav nav-tabs d-flex justify-content-center mb-5">
          {categories?.map((category, idx) => (
            <>
              <li class="nav-item" key={idx}>
                <a
                  class={`nav-link ${activeTabs === idx ? "active" : ""}`}
                  href="#"
                  onClick={() => filterProduct(idx)}
                >
                  {category}
                </a>
              </li>
            </>
          ))}
        </ul>
      </>
    );
  };

  // SIDEBAR
  const Sidebar = () => {
    return (
      <>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Conditions
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {condition?.map((cond, idx) => (
              <>
                <li key={idx}>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => filterCondition(cond)}
                  >
                    {cond}
                  </a>
                </li>
              </>
            ))}
          </ul>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder">Catalogs</h1>
            <hr />
          </div>
        </div>
        <FilterTab />
        <div className="row justify-content-center">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            {loading ? <Loading /> : <ListProduct data={filter} />}
          </div>
        </div>
      </div>
    </>
  );
}
