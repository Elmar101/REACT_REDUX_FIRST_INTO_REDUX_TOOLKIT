import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset, returnData, datasActions } from "./actions";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer
  }
});

export { store, reset, datasActions, returnData,addSong, removeSong, addMovie, removeMovie };
