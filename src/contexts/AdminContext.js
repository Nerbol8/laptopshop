import axios from "axios";
import React, { useReducer } from "react";
import { API } from "../helpers/const";

//! Подключение хука CreateContex

export const adminContext = React.createContext();

//! Состояния

const initState = {
  products: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_PRODUCT_TO_EDIT":
      return { ...state, productToEdit: action.payload };
    default:
      return state;
  }
};

const AdminContext = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const addProduct = async (newProduct) => {
    await axios.post(API, newProduct);
  };

  const getProducts = async () => {
    const response = await axios(API);
    const action = {
      type: "GET_PRODUCTS",
      payload: response.data,
    };
    dispatch(action);
  };

  return (
    <adminContext.Provider
      value={{
        addProduct: addProduct,
      }}
    >
      {props.children}
    </adminContext.Provider>
  );
};

export default AdminContext;
