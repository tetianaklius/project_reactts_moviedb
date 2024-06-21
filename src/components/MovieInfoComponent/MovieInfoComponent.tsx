import React, {FC, useState} from 'react';
import {useLocation} from "react-router-dom";

import styles from "./MovieInfoComponent.module.css";
import GenreBadgeComponent from "../GenreBadgeComponent/GenreBadgeComponent";
import {IMovie} from "../../models/Movies/IMovie";
import {useAppDispatch} from "../../redux/store";
import {moviesActions} from "../../redux/slices/moviesSlice";
import MoreMovieDetailsComponent from "../MoreMovieDetailsComponent/MoreMovieDetailsComponent";
import {urls} from "../../constants/urls";
import {StarsRatingComponent} from "../StarsRatingComponent/StarsRatingComponent";

export const MovieInfoComponent: FC = () => {
    const location = useLocation();
    const movie: IMovie = location.state.movie;

    const dispatch = useAppDispatch();
    const [trigger, setTrigger] = useState<boolean>(false);

    return (
        <div
            className={styles.movie_component}
            style={{
                backgroundImage: `linear-gradient(to right, rgba(255,255,255, 0.65) 0 100%),`
                    + `url(${urls.poster.base}/${urls.poster.size.original}/${movie.backdrop_path})`,
                backgroundSize: "cover",
            }}>

            <div className={styles.movie_box}>

                <div className={styles.movie_poster}>
                    <img src={`${urls.poster.base}/${urls.poster.size.size_400}/${movie.poster_path}`}
                         alt="movie poster"/>
                </div>

                <div className={styles.movie_description}>
                    <div className={styles.title}>
                        {movie.title}
                    </div>
                    <div>
                        {movie.release_date}
                        {movie.adult && <small>adult</small>}
                    </div>
                    <div className={styles.stars_rating}>
                        <StarsRatingComponent key={movie.id} movie={movie}/>
                        <span className={styles.vote_count}>(голосів: {movie.vote_count})</span>
                    </div>
                    <div className={styles.badges_box}>
                        <GenreBadgeComponent key={movie.id}/>
                    </div>
                    <div className={styles.overview}>
                        {movie.overview}
                    </div>
                </div>
            </div>

            <button className={styles.button_show_details}
                    onClick={() => {
                        dispatch(moviesActions.loadMovieDetails(movie.id.toString()))
                        setTrigger(true)
                    }}>
                show more details
            </button>
            {trigger && <MoreMovieDetailsComponent key={movie.id}/>}

            <div className={styles.actors_box}></div>

            <div className={styles.trailer_box}>

            </div>
        </div>
    );
};
