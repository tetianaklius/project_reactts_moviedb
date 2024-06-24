import React, {FC} from 'react';

import {MovieInfoComponent} from "../../components/MovieInfoComponent/MovieInfoComponent";
import styles from "./MoviePage.module.css";

const MoviePage: FC = () => {

    return (
        <div className={styles.movie_page}>
            <MovieInfoComponent
            />
        </div>
    );
};

export default MoviePage;