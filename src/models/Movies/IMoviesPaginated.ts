import {IMovie} from "./IMovie";
import {IMovieDetailed} from "./IMovieDetailed";

export interface IMoviesPaginated {
    page: number,
    currentPage: number,
    results: IMovie[],
    total_pages?: number
    total_results?: number,
    isLoaded: boolean,
    query: string | null,
    dates: {
        max: string,
        min: string
    },
    movieDetailed: IMovieDetailed | null;
}