import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IGenres} from "../../models/Genres/IGenres";
import {genresService} from "../../services/genres.api.service";
import {IGenre} from "../../models/Genres/IGenre";

type GenresSliceType = {
    genres: IGenres | null,
    currentGenre: IGenre | null,
}

const genresInitState: GenresSliceType = {
    genres: null,
    currentGenre: null
}


const loadGenres = createAsyncThunk(
    "genresSlice/loadGenres",
    async (_, thunkAPI) => {
        try {
            const genres = await genresService.getAll();
            return thunkAPI.fulfillWithValue(genres);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    });

export const genresSlice = createSlice({
        name: "genresSlice",
        initialState: genresInitState,
        reducers: {
            changeGenreCurrent: (state, action) => {
                state.currentGenre = action.payload;
            }
        },
        extraReducers: builder =>
            builder
                .addCase(loadGenres.fulfilled, (state, action) => {
                    state.genres = action.payload;
                })
                .addCase(loadGenres.rejected, (state, action) => {
                    ///
                })
    }
)

export const genresActions = {
    ...genresSlice.actions,
    loadGenres
}