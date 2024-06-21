import React, {FC} from 'react';

import {useAppSelector} from "../../redux/store";
import {MovieCardComponent} from "../MovieCardComponent/MovieCardComponent";
import styles from "./MoviesComponent.module.css";

const MoviesComponent: FC = () => {
    const {results: movies} = useAppSelector(state => state.moviesSlice);
    // const {theme} = useContext(ColorThemeContext);

    return (
        <div
            className={styles.movies_cards}
            // style={{background: theme.background, color: theme.color}}
            >
            {
                movies ?
                    movies.map(movie => <MovieCardComponent key={movie.id} movie={movie}/>)
                    : <h3>Loading...</h3>
            }
        </div>
    );
};

export default MoviesComponent;