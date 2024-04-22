import FavouriteSlice from "./FavouriteSlice";
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
    reducer: {
        favourite: FavouriteSlice,
    }
})