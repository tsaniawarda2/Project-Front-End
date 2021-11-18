import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { BASEURL } from "../config/api";

import ListProduct from "../components/ListProduct";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Filter from "../components/Filter";

import "../assets/styles/catalogs.css";
import "../assets/styles/filter.css";

const categories = ["All", "Fashion", "Furniture", "Electronics", "Accesories"];
const condition = ["All", "Excellent", "Very good", "Good", "Moderate"];

export default function Catalogs() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [activeTabs, setActiveTabs] = useState(0);
  const [activeConditions, setActiveConditions] = useState(0);

  let componentMounted = true;

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

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Loading = () => {
    return <>Loading...</>;
  };

  // FILTER PRODUCT
  const Tab = () => {
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
    return (
      <>
        <ul className="categories nav d-flex justify-content-center mb-5 sticky-top">
          {categories?.map((category, idx) => (
            <>
              <li className="nav-item" key={idx}>
                <NavLink
                  class={`nav-link ${activeTabs === idx ? "active" : ""}`}
                  to="#"
                  onClick={() => filterProduct(idx)}
                >
                  <span className="link-cat">{category}</span>
                </NavLink>
              </li>
            </>
          ))}
        </ul>
      </>
    );
  };

  // FILTER CONDITION
  const Dropdown = () => {
    const filterCondition = (cdn, idx) => {
      setActiveConditions(cdn);
      let currProducts = [];
      if (activeTabs === 0) {
        currProducts = data;
      } else {
        const cat = categories[activeTabs].toLowerCase();
        const updateList = data?.filter((product) => product.category === cat);
        currProducts = updateList;
      }
      if (idx === 0) {
        setFilter(currProducts);
      } else {
        const cond = condition[idx].toLowerCase();
        const updateList = currProducts?.filter(
          (product) => product.condition === cond
        );
        setFilter(updateList);
      }
    };

    return (
      <>
        <div className="dropdown ms-5">
          <span
            className="selected"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {!activeConditions ? "Conditions" : activeConditions}
            <i class="fas fa-angle-down icon"></i>
          </span>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {condition?.map((cond, idx) => (
              <>
                <li key={idx}>
                  <button
                    className="dropdown-item"
                    onClick={() => filterCondition(cond, idx)}
                  >
                    {cond}
                  </button>
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
      <Navbar />
      <div className="parallax"></div>

      <section>
        <Tab />
        <div className="container my-5">
          <div className="select-filter d-flex justify-content-end">
            <Filter />
            <Dropdown />
          </div>
          <div className="text-center">
            <div className="listProduct">
              {loading ? <Loading /> : <ListProduct data={filter} />}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
