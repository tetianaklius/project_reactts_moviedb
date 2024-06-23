import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {moviesService} from "../../services/movies.api.service";
import {ISearchParams} from "../../models/Search/SearchParams";
import {IMoviesPaginated} from "../../models/Movies/IMoviesPaginated";
import {IMovie} from "../../models/Movies/IMovie";
import {IMovieDetailed} from "../../models/Movies/IMovieDetailed";
import {IMovieActors} from "../../models/Actors/IMovieActors";

export type moviesSliceType = {
    moviesPag: IMoviesPaginated | null,
    movie: IMovie | null,
    isLoaded: boolean,
    movieDetailed: IMovieDetailed | null,
    currentPage: number,
    page: number,
    dates: {
        max: string,
        min: string
    },
    query: string | null
    actors: IMovieActors | null
}


const moviesInitState: moviesSliceType = {
    moviesPag: null,
    movie: null,
    isLoaded: false,
    movieDetailed: null,
    currentPage: 1,
    page: 1,
    dates: {
        max: "",
        min: ""
    },
    query: null,
    actors: null
}

const loadMovies = createAsyncThunk(
    "moviesSlice/loadMovies",
    async (params: ISearchParams, thunkAPI) => {
        try {
            const movies: IMoviesPaginated = await moviesService.getAll(params);
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
            return thunkAPI.fulfillWithValue(movieDetailed);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    });

const loadMovieActors = createAsyncThunk(
    "moviesSlice/loadMovieActors",
    async (id: string, thunkAPI) => {
        try {
            const movieActors = await moviesService.getActorsByMovieId(id);
            console.log("slice loadMovieActors", movieActors)
            return thunkAPI.fulfillWithValue(movieActors);
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
            },
            changeQuery: (state, action: PayloadAction<string | null>) => {
                state.query = action.payload;
            },
            changePage: (state, action: PayloadAction<number>) => {
                state.currentPage = action.payload;
            },
        },
        extraReducers: builder =>
            builder
                .addCase(loadMovies.fulfilled, (state, action: PayloadAction<IMoviesPaginated>) => {
                    state.moviesPag = action.payload;
                })
                .addCase(loadMovies.rejected, (state, action) => {
                    ///
                })
                .addCase(loadMovieDetails.fulfilled, (state, action: PayloadAction<IMovieDetailed>) => {
                    state.movieDetailed = action.payload;
                })
                .addCase(loadMovieDetails.rejected, (state, action) => {
                    ///
                })
                .addCase(loadMovieActors.fulfilled, (state, action: PayloadAction<IMovieActors>) => {
                    state.actors = action.payload;
                })
                .addCase(loadMovieActors.rejected, (state, action) => {
                    ///
                })

    }
)

export const moviesActions = {
    ...moviesSlice.actions,
    loadMovies,
    loadMovieDetails,
    loadMovieActors
}