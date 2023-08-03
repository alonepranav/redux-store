import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const cartItemSlice = createSlice({
  name: "item",
  initialState: [],
  reducers: {
    add: (state, action) => {
      let dataObj = { ...action.payload, qty: 1 };

      let element = state.find((i) => i.id === dataObj.id);

      if (element === undefined) {
        state.push({ ...dataObj, qty: 1 });
      } else {
        let ind = state.indexOf(element);
        let newObj = state[ind];
        newObj.qty = newObj.qty + 1;
        let temp = [...state];
        temp[ind] = newObj;
        state = [...temp];
      }

      toast.success("Item Added to Cart");
    },
    increment: (state, action) => {
      let element = state.find((item) => {
        return item.id === action.payload;
      });

      let ind = state.indexOf(element);
      let newObj = state[ind];
      newObj.qty = newObj.qty + 1;
      let temp = [...state];
      temp[ind] = newObj;
      state = [...temp];
    },
    decrement: (state, action) => {
      let element = state.find((item) => {
        return item.id === action.payload;
      });

      if (element.qty > 1) {
        let ind = state.indexOf(element);
        let newObj = state[ind];
        newObj.qty = newObj.qty - 1;
        let temp = [...state];
        temp[ind] = newObj;
        state = [...temp];
      }
    },

    deleteItem: (state, action) => {
      toast.success("Item Removed from Cart");
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, increment, decrement, deleteItem } = cartItemSlice.actions;

export default cartItemSlice.reducer;
