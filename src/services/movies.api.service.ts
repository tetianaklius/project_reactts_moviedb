import {urls} from "../constants/urls";
import {IMoviesPaginated} from "../models/Movies/IMoviesPaginated";
import {IMovieDetailed} from "../models/Movies/IMovieDetailed";
import {axiosInstance} from "./api.service";
import {ISearchParams} from "../models/Search/SearchParams";


export const moviesService = {
    getAll: async (params: ISearchParams): Promise<IMoviesPaginated> => {
        const response = await axiosInstance.get<IMoviesPaginated>(
            params.query ? urls.movies.byStringName : urls.movies.all, {params}
        );
        return response.data;
    },
    getById: async (id: string): Promise<IMovieDetailed> => {
        const response = await axiosInstance.get<IMovieDetailed>(urls.movies.byId(+id), {params: {language: "uk-UA"}});
        return response.data;
    },
    getImagesPaths: async (id: string): Promise<string[]> => {
        const response = await axiosInstance.get<string[]>(urls.images(+id));
        return response.data;
    },
}