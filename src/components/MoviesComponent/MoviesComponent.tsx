import React, {FC} from 'react';

import {useAppSelector} from "../../redux/store";
import {MovieCardComponent} from "../MovieCardComponent/MovieCardComponent";
import styles from "./MoviesComponent.module.css";

const MoviesComponent: FC = () => {
    const {moviesPag, isLoadedMovies, moviesOfGenre} = useAppSelector(state => state.moviesSlice);

    return (
        <div className={styles.movies_cards}>
            {
                moviesOfGenre && moviesOfGenre.map(movie => <MovieCardComponent key={movie.id}
                                                                                movie={movie}/>)
            }
            {
                isLoadedMovies && moviesPag ?
                    moviesPag.results.map(movie => <MovieCardComponent key={movie.id}
                                                                       movie={movie}/>)
                    : <h3>Loading...</h3>
            }
        </div>
    );
};

export default MoviesComponent;