import axios from "axios";

import {baseUrl, urls} from "../constants/urls";
import {IGenres} from "../models/Genres/IGenres";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {}
});

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2ZkOThkMmRkZGI3NjJiZjdmNjMzYWY0NDY0MmI0YyIsInN1YiI6IjY2NmUwMzgxMzIwY2I1NjZjM2UyNDg4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D4xdZtrX0R-VzTW5S9IXfamn61P4UGictVgJocakOh8";
axiosInstance.interceptors.request.use(request => {
        request.headers.set("Authorization", `Bearer ${token}`)
        return request;
    }
);

export const genresService = {
    getAll: async (): Promise<IGenres> => {
        const response = await axiosInstance.get<IGenres>(urls.genres.base);
        return response.data;
    }
}