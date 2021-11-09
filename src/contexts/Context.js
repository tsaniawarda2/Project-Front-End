import { createContext, useContext, useReducer } from "react";
import { cartReducer} from "./Reducers";

const Cart = createContext();

const dataProducts = localStorage.getItem("data-product");

const Context = ({ children }) => {
  const products = dataProducts

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return (
    <Cart.Provider value={{state, dispatch}}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
