import { createSlice } from "@reduxjs/toolkit";
import { reset, returnData, datasActions } from "../../store/index";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(reset, (state, action) => {
        return [];
      })
      .addCase(returnData, (state,action)=> {
        console.log({returnDataACTION: action});
        return state;
      })
      .addCase(datasActions, (state,action)=> {
        console.log({datasActions: action});
        return state;
      });
  }
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
