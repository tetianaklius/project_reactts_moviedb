import axios from "axios";

import {baseUrl, urls} from "../constants/urls";
import {IMoviesPaginated} from "../models/IMovie/IMoviePaginated";

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

export const moviesService = {
    getAll: async (page: string): Promise<IMoviesPaginated> => {
        const response = await axiosInstance.get<IMoviesPaginated>(urls.movies.all(+page));
        return response.data;
    }
}