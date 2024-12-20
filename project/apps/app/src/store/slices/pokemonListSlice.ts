import { createSlice } from "@reduxjs/toolkit";

const pokemonListSlice = createSlice({
    name: 'pokemonList',
    initialState: {
        pokemon:null
    },
    reducers: {
        addItem: (state, action) => {
            state.pokemon = action.payload
        }
    }
})

export const { addItem } = pokemonListSlice.actions
export default pokemonListSlice.reducer;


/* QUESTION ANSWER
[0] Traditional Redux involves manually creating actions, types, and reducers, leading to repetitive boilerplate. 
[1] Redux Toolkit's createSlice simplifies this by automatically generating actions and types, reducing redundancy.


immutable Benifit.
[0] Since data cannot be modified in place, there are no unexpected changes in state, making the behavior of the application easier to predict and debug.
[1] Simplified Debugging;
[2] Simplified Tests
[3] No Side Effects; 

*/