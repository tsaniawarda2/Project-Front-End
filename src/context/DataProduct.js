import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import { BASEURL } from "../config/api";
// import { filterReducer } from "../pages/filter/Reducers";
import { cartReducer } from "./Reducers";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASEURL}/products`);
      setData(await response.clone().json());
      setFilter(await response.json());
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  // const [state, dispatch] = useReducer(filterReducer, {
  //   searchData: "",
  // });

  const [state, dispatch] = useReducer(cartReducer, {
    products: data,
    cart : []
  })

  return (
    <DataContext.Provider value={{ state, dispatch, data, filter, loading }}>
      {children}
    </DataContext.Provider>
  );
};

// export const CartState = () => {
//   return useContext(DataContext)
// }

export { DataContext, DataProvider };
