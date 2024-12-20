import { configureStore } from "@reduxjs/toolkit";
import pokemonListSlice from "./slices/pokemonListSlice";

const store = configureStore({
    reducer: {
        pokemonList:pokemonListSlice
    }
});

export default store;