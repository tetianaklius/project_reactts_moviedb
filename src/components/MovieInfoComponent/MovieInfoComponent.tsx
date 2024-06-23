import React, {FC, useState, Fragment} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import ReactPlayer from "react-player";

import styles from "./MovieInfoComponent.module.css";
import GenreBadgeComponent from "../GenreBadgeComponent/GenreBadgeComponent";
import {IMovie} from "../../models/Movies/IMovie";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {moviesActions} from "../../redux/slices/moviesSlice";
import MoreMovieDetailsComponent from "../MoreMovieDetailsComponent/MoreMovieDetailsComponent";
import {urls} from "../../constants/urls";
import {StarsRatingComponent} from "../StarsRatingComponent/StarsRatingComponent";
import ActorsCarouselComponent from "../ActorsCarouselComponent/ActorsCarouselComponent";

export const MovieInfoComponent: FC = () => {
    const location = useLocation();
    const movie: IMovie = location.state.movie;

    const dispatch = useAppDispatch();
    const [trigger, setTrigger] = useState<boolean>(false);
    const {useDarkTheme} = useAppSelector(state => state.genresSlice);
    const {movieDetailed, actors} = useAppSelector(state => state.moviesSlice);

    const navigate = useNavigate();
    const img_path: string = `${urls.poster.base}/${urls.poster.size.original}/${movie.poster_path}`;

    return (
        <div
            className={styles.movie_component}
            style={useDarkTheme ?
                {
                    backgroundImage: `linear-gradient(to right, rgba(0,0,0, 0.8) 0 100%),`
                        + `url(${urls.poster.base}/${urls.poster.size.original}/${movie.backdrop_path})`,
                    backgroundSize: "cover",
                }
                :
                {
                    backgroundImage: `linear-gradient(to right, rgba(255,255,255, 0.65) 0 100%),`
                        + `url(${urls.poster.base}/${urls.poster.size.original}/${movie.backdrop_path})`,
                    backgroundSize: "cover",
                }
            }>

            <div className={styles.movie_box}>
                <div className={styles.movie_poster}>
                    <img
                        src={`${urls.poster.base}/${urls.poster.size.original}/${movie.poster_path}`}
                        alt="movie poster"
                        onClick={() => navigate("poster", {state: {img_path: img_path}})}
                    />
                </div>
                <div className={styles.movie_description}>
                    <div className={styles.title}>
                        {movie.title}
                    </div>
                    <div>
                        <span>{movie.release_date}</span>
                        {movie.adult &&
                            <span className={styles.adult_mark}>
                                <small>для дорослих</small>
                            </span>}
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

            <button
                className={styles.button_show_details}
                onClick={() => {
                    dispatch(moviesActions.loadMovieDetails(movie.id.toString()))
                    dispatch(moviesActions.loadMovieActors(movie.id.toString()))
                    setTrigger(true);
                }}>
                більше деталей
            </button>

            {trigger && <MoreMovieDetailsComponent key={movie.id}/>}

            {(actors && trigger) && <ActorsCarouselComponent actors={actors.cast}/>}

            {(trigger && movieDetailed?.videos.results.length)
                ?
                <div className={styles.trailer_box}>
                    <div>Трейлер фільму</div>
                    <Fragment key={`${urls.video.base.youtube}${movieDetailed.videos.results[0]?.key}`}>
                        <ReactPlayer
                            light
                            url={`${urls.video.base.youtube}${movieDetailed.videos.results[0]?.key}`}
                            width="40vw"
                            playing
                        />
                    </Fragment>
                </div>
                :
                ""}
        </div>
    );
};
