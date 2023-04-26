import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { APIRoute, SliceNameSpace, Status } from '../../consts/enum';
import { Product } from '../../types/product';
import axios from 'axios';
import { RootState } from '../index';

type InitialState = {
  productStatus: Status;
  extraProductStatus: Status;
  products: Product[];
  extraProducts: Product[];
}

const initialState: InitialState = {
  extraProductStatus: Status.Idle,
  productStatus: Status.Idle,
  products: [],
  extraProducts: []
};

const appSlice = createSlice({
  initialState,
  name: SliceNameSpace.App,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.productStatus = Status.Success;
      })
      .addCase(fetchProducts.pending, (state) => {
        state.productStatus = Status.Loading;
      })
      .addCase(fetchExtraProducts.fulfilled, (state, action) => {
        state.extraProducts = action.payload;
        state.extraProductStatus = Status.Success;
      })
      .addCase(fetchExtraProducts.pending, (state) => {
        state.extraProductStatus = Status.Loading;
      });
  }
});

const fetchProducts = createAsyncThunk(
  'app/fetchProducts',
  async () => {
    const products = await axios.get<Product[]>(APIRoute.Poducts);

    return products.data;
  }
);

const fetchExtraProducts = createAsyncThunk(
  'app/fetchExtraProducts',
  async () => {
    const products = await axios.get<Product[]>(APIRoute.ExtraProducts);

    return products.data;
  }
);

const selectProducts = (state: RootState) => state[SliceNameSpace.App].products;
const selectExtraProducts = (state: RootState) => state[SliceNameSpace.App].extraProducts;
const selectProductStatus = (state: RootState) => state[SliceNameSpace.App].productStatus;
const selectExtraProductStatus = (state: RootState) => state[SliceNameSpace.App].extraProductStatus;

export { fetchProducts, fetchExtraProducts, selectProducts, selectProductStatus, selectExtraProductStatus, selectExtraProducts };
export default appSlice.reducer;
