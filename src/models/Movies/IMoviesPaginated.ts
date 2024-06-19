import {IMovie} from "./IMovie";

export interface IMoviesPaginated {
    page: number
    results: IMovie[],
    total_pages?: number
    total_results?: number
}