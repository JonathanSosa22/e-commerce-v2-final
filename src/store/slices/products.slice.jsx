import { createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from "./isLoading.slice";
import axios from "axios";

export const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProducts: (state, actions) => {
      return actions.payload;
    },
  },
});

export const getProductsThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  axios
    .get("https://e-commerce-api-v2.academlo.tech/api/v1/products")
    .then((res) => dispatch(setProducts(res.data)))
    .catch((error) => console.error(error))
    .finally(() => dispatch(setIsLoading(false)));
};

export const filterProductsThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  axios
    .get(
      `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`
    )
    .then((res) => dispatch(setProducts(res.data)))
    .catch((error) => console.error(error))
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
