import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import styles from "./MovieCardComponent.module.css";
import {IMovie} from "../../models/Movies/IMovie";
import PosterPreviewComponent from "../PosterPreviewComponent/PosterPreviewComponent";
import {StarsRatingComponent} from "../StarsRatingComponent/StarsRatingComponent";
import {useAppSelector} from "../../redux/store";

interface IProps {
    movie: IMovie;
}

export const MovieCardComponent: FC<IProps> = ({movie}) => {
    const navigate = useNavigate();
    const {useDarkTheme} = useAppSelector(state => state.genresSlice);

    return (
        <div
            className={useDarkTheme? styles.movie_card_dark_theme: styles.movie_card_light_theme}
            onClick={() => {
                navigate(movie.id.toString(), {state: {movie: movie}});
        }}>
            <div className={styles.poster_preview}>
                <PosterPreviewComponent key={movie.id} path={movie.poster_path}/>
            </div>
            <div className={styles.title}>
                {movie.title}
            </div>
            <StarsRatingComponent movie={movie}/>
        </div>
    );
};

