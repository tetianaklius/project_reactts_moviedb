import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {moviesService} from "../../services/movies.api.service";
import {ISearchParams} from "../../models/Search/SearchParams";
import {IMoviesPaginated} from "../../models/Movies/IMoviesPaginated";


const moviesInitState: IMoviesPaginated = {
    page: 1,
    currentPage: 1,
    // moviesPag: null,
    results: [],
    isLoaded: false,
    movieDetailed: null,
    dates: {
        max: "",
        min: ""
    },
    query: null,

}

const loadMovies = createAsyncThunk(
    "moviesSlice/loadMovies",
    async (params: ISearchParams, thunkAPI) => {
        try {
            const movies = await moviesService.getAll(params);
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
            changeLoadStatus: (state, action: PayloadAction<boolean>) => {
                state.isLoaded = action.payload;
            },
            changeQuery: (state, action: PayloadAction<string | null>) => {
                state.query = action.payload;
            },
            changePage: (state, action: PayloadAction<number>) => {
                state.currentPage = action.payload;
            },
            // changeMoreDetailsStatus: (state, action: PayloadAction<boolean>) => {
            //     // state.isLoadedDetails = action.payload;
            // }
        },
        extraReducers: builder =>
            builder
                .addCase(loadMovies.fulfilled, (state, action) => {
                    const {results, total_pages, total_results, page} = action.payload;
                    state.results = results;
                    state.total_pages = total_pages;
                    state.page = page;
                    state.total_results = total_results
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