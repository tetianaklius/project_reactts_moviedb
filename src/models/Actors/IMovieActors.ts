import {IMovieActor} from "./IMovieActor";
import {IMovieCrew} from "./IMovieCrew";

export interface IMovieActors {
    id: number,
    cast: IMovieActor[],
    crew: IMovieCrew[]
}