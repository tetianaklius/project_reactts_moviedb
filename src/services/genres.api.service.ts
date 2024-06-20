import {urls} from "../constants/urls";
import {IGenres} from "../models/Genres/IGenres";
import {axiosInstance} from "./api.service";


export const genresService = {
    getAll: async (): Promise<IGenres> => {
        const response = await axiosInstance.get<IGenres>(urls.genres.base, {params: {language: "uk-UA"}});
        return response.data;
    }
}