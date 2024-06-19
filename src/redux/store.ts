import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";

import {moviesSlice} from "./slices/moviesSlice";
import {genresSlice} from "./slices/genresSlice";

export const store = configureStore({
    reducer: {
        moviesSlice: moviesSlice.reducer,
        genresSlice: genresSlice.reducer
    }
});

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();