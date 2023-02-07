import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import {collection, getDocs } from "firebase/firestore";
import { db } from "firebase";

const colRef = collection(db, "products");

export const fetchData = createAsyncThunk("data/fetchItems", async () => {
  const snapshot = await getDocs(colRef);
  const products: Object[] = [];
  snapshot.docs.forEach((doc) => {
    products.push({ ...doc.data(), id: doc.id });
  });
  return products;
});

export interface Item {
  name?: string;
  description?: string;
  price?: number;
  type?: string;
  url?: string[];
  id?: string;
  qty?: number;
}

type State = {
  products: Item[];
  filtered: Item[];
  currentItem: Item;
  status: "idle" | "loading" | "fulfilled" | "rejected";
  error: null | unknown;
};

const initialState: State = {
  products: [],
  currentItem: {},
  filtered: [],
  status: "idle",
  error: null,
};

export const dataSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filter: (state, action) => {
      state.filtered = state.products.filter((item) => {
        if (item.type !== action.payload) return false;

        return item;
      });
    },
    findCurrent: (state, action) => {
      let arr = state.products.filter((item) => {
        return item.id === action.payload;
      });
      state.currentItem = arr[0];
    },
    // REFACTOR
    searchItem: (state, action) => {
      let searchQuery = state.products.filter((item) => {
        return item.id === action.payload;
      });
      state.currentItem = searchQuery[0];
    },
    sortItems: (state, action) => {
      const type = action.payload;
      switch (type) {
        case "LOW_TO_HIGH":
          state.filtered.sort((a, b) => a.price! - b.price!);
          break;
        case "HIGH_TO_LOW":
          state.filtered.sort((a, b) => b.price! - a.price!);
          break;
        case "A_TO_Z":
          state.filtered.sort((a, b) => {
            const nameA = a.name ? a.name : "";
            const nameB = b.name ? b.name : "";
            return nameA.localeCompare(nameB);
          });
          break;
        case "Z_TO_A":
          state.filtered.sort((a, b) => {
            const nameA = a.name ? a.name : "";
            const nameB = b.name ? b.name : "";
            return nameB.localeCompare(nameA);
          });
          break;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.products = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        console.log("changed")
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const { filter, findCurrent, searchItem, sortItems } = dataSlice.actions;

export const selectStatus = (state: RootState) => state.fetcher.status;
export const selectData = (state: RootState) => state.fetcher.products;
export const selectFiltered = (state: RootState) => state.fetcher.filtered;
export const selectCurrentItem = (state: RootState) =>
  state.fetcher.currentItem;
export const selectError = (state: RootState) => state.fetcher.error;
export const selectProducts = (state: RootState) => state.fetcher.products;

export default dataSlice.reducer;
