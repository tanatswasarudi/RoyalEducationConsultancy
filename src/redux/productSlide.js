import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: []
};

export const productSlice = createSlice({
  name: "university",
  initialState,
  reducers: {
    setDataProduct: (state, action) => {
      state.productList = [...action.payload];
    }
  }
});

export const fetchProductData = () => async (dispatch) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_SERVER_DORMIN}/universities`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    dispatch(setDataProduct(data));
  } catch (error) {
    console.error('Error:', error);
  }
};

export const { setDataProduct } = productSlice.actions;

export default productSlice.reducer;