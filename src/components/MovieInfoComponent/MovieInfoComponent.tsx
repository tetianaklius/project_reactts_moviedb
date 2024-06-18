import React, {FC} from 'react';
import {useLocation} from "react-router-dom";

import styles from "./MovieInfoComponent.module.css";
import PosterPreviewComponent from "../PosterPreviewComponent/PosterPreviewComponent";
import StarsRatingComponent from "../StarsRatingComponent/StarsRatingComponent";
import GenreBadgeComponent from "../GenreBadgeComponent/GenreBadgeComponent";
import {IMovie} from "../../models/IMovie/IMovie";

export const MovieInfoComponent: FC = () => {
    const location = useLocation();
    const movie: IMovie = location.state.movie;

    return (
        <div className={styles.movie_component}>

            <div className={styles.movie_box}>

                <div className={styles.movie_poster}>
                    <PosterPreviewComponent key={movie.id} path={movie.poster_path}/>
                </div>

                <div className={styles.movie_description}>
                    <div className={styles.title}>
                        {movie.title}
                    </div>
                    <div className={styles.stars_rating}>
                        <StarsRatingComponent key={movie.id}/>
                    </div>
                    <div className={styles.badges_box}>
                        <GenreBadgeComponent key={movie.id}/>
                    </div>
                    <div className={styles.overview}>
                        {movie.overview}
                    </div>
                </div>

            </div>

            <div className={styles.actors_box}>
            </div>

            <div className={styles.trailer_box}>
            </div>
        </div>
    );
};
