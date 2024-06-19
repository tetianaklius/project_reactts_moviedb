import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {moviesService} from "../../services/movies.api.service";
import {IMoviesPaginated} from "../../models/Movies/IMoviesPaginated";
import {IMovieDetailed} from "../../models/Movies/IMovieDetailed";
import {IMovie} from "../../models/Movies/IMovie";


type MoviesSliceType = {
    moviesPag: IMoviesPaginated | null,
    movieDetailed: IMovieDetailed | null,
    moviesOfGenre: IMovie[],
    isLoadedMovies: boolean,
    // isLoadedDetails: boolean
}

const moviesInitState: MoviesSliceType = {
    moviesPag: null,
    movieDetailed: null,
    moviesOfGenre: [],
    isLoadedMovies: false,
    // isLoadedDetails: false
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

const loadMovieDetails = createAsyncThunk(
    "moviesSlice/loadMovieDetails",
    async (id: string, thunkAPI) => {
        try {
            const movieDetailed = await moviesService.getById(id);
            // thunkAPI.dispatch(moviesActions.changeMoreDetailsStatus(true));
            return thunkAPI.fulfillWithValue(movieDetailed);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    });

export const moviesSlice = createSlice({
        name: "moviesSlice",
        initialState: moviesInitState,
        reducers: {
            saveMoviesFilteredByGenre: (state, action: PayloadAction<IMovie[]>) => {
                state.moviesOfGenre = action.payload;
            },

            changeLoadStatus: (state, action: PayloadAction<boolean>) => {
                state.isLoadedMovies = action.payload;
            },
            changeMoreDetailsStatus: (state, action: PayloadAction<boolean>) => {
                // state.isLoadedDetails = action.payload;
            }
        },
        extraReducers: builder =>
            builder
                .addCase(loadMovies.fulfilled, (state, action) => {
                    state.moviesPag = action.payload;
                })
                .addCase(loadMovies.rejected, (state, action) => {
                    ///
                })
                .addCase(loadMovieDetails.fulfilled, (state, action) => {
                    state.movieDetailed = action.payload;
                })
                .addCase(loadMovieDetails.rejected, (state, action) => {
                    ///
                })

    }
)

export const moviesActions = {
    ...moviesSlice.actions,
    loadMovies,
    loadMovieDetails
}