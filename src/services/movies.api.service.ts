import {urls} from "../constants/urls";
import {IMoviesPaginated} from "../models/Movies/IMoviesPaginated";
import {IMovieDetailed} from "../models/Movies/IMovieDetailed";
import {axiosInstance} from "./api.service";
import {ISearchParams} from "../models/Search/SearchParams";
import {IMovieActors} from "../models/Actors/IMovieActors";


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
    getActorsByMovieId: async (id: string): Promise<IMovieActors> => {
        const response = await axiosInstance.get<IMovieActors>(urls.actors.byMovieId(+id), {params: {language: "uk-UA"}});
        console.log(response.data)
        return response.data;

    }
}