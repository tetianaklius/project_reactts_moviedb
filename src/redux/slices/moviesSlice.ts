import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovie} from "../../models/IMovie/IMovie";
import {moviesService} from "../../services/movies.api.service";
import {IMoviesPaginated} from "../../models/IMovie/IMoviePaginated";


type MoviesSliceType = {
    moviesPag: IMoviesPaginated | null,
    movie: IMovie | null,
    isLoaded: boolean
}

const moviesInitState: MoviesSliceType = {
    moviesPag: null,
    movie: null,
    isLoaded: false
}

const loadMovies = createAsyncThunk(
    "moviesSlice/loadMovies",
    async (page: string, thunkAPI) => {
        try {
            const movies = await moviesService.getAll(page);
            thunkAPI.dispatch(moviesActions.changeLoadStatus(true));
            return thunkAPI.fulfillWithValue(movies);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    });

export const moviesSlice = createSlice({
        name: "moviesSlice",
        initialState: moviesInitState,
        reducers: {
            changeLoadStatus: (state, action: PayloadAction<boolean>) => {
                state.isLoaded = action.payload;
            }
        },
        extraReducers: builder =>
            builder
                .addCase(loadMovies.fulfilled, (state, action) => {
                    state.moviesPag = action.payload;
                })
    }
)

export const moviesActions = {
    ...moviesSlice.actions,
    loadMovies
}