import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../lib/storage";

const initialState = loadState("product") || {
  product: [],
  like: [],
  price: 0,
};

const productReduser = createSlice({
  name: "productReduser",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = state.product?.find(
        (item) => item.id === action.payload.id
      );
      if (!product) {
        return {
          ...state,
          product: [
            ...state.product,
            {
              ...action.payload,
              userCount: 1,
              userPrice: action.payload.price,
            },
          ],
        };
      }
      return state;
    },
    deleteProduct: (state, action) => {
      state.product = state.product.filter(
        (item) => item.id !== action.payload
      );
    },
    removeAll: (state) => {
      return {
        ...state,
        product: [],
      };
    },
    setLike: (state, action) => {
      const product = state.like?.find((item) => item.id === action.payload.id);
      if (!product) {
        return {
          ...state,
          like: [
            ...state.like,
            {
              ...action.payload,
            },
          ],
        };
      }
      return state;
    },
    removeLike: (state, action) => {
      return {
        ...state,
        like: state.like.filter((item) => item.id !== action.payload.id),
      };
    },
    toggleAnmount: (state, action) => {
      if (action.payload.type === "add") {
        const newProduct = state.product.map((item) => {
          if (item.id == action.payload.id) {
            return {
              ...item,
              userCount: item.userCount + 1,
              userPrice: (item.userCount + 1) * item.price,
            };
          }
          return item;
        });
        return { ...state, product: newProduct };
      }
      if (action.payload.type === "delete" && 1 !== action.payload.userCount) {
        const newProduct = state.product.map((item) => {
          if (item.id == action.payload.id && action.payload.userCount > 1) {
            return {
              ...item,
              userCount: item.userCount - 1,
              userPrice: (item.userCount - 1) * item.price,
            };
          }
          return item;
        });
        return { ...state, product: newProduct };
      }
    },
    totalPriceData: (state, action) => {
      const count = state.product?.reduce((a, b) => {
        return a + b.userPrice;
      }, 0);
      return { ...state, price: count };
    },
  },
});

export default productReduser.reducer;

export const {
  addProduct,
  deleteProduct,
  setLike,
  removeLike,
  toggleAnmount,
  totalPriceData,
  removeAll,
} = productReduser.actions;
