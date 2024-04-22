import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: JSON.parse(localStorage.getItem('FavList')) || [],
}
export const FavouriteSlice = createSlice({
    name: "favouriteSlice",
    initialState,
    reducers: {

        addMovie: (state, action) => {
            state.value.push(action.payload)
        },
        removeMovie: (state, action) => {
            state.value.splice(action.payload, 1)
        }



    }
})

export const { addMovie } = FavouriteSlice.actions
export const { removeMovie } = FavouriteSlice.actions
export default FavouriteSlice.reducer