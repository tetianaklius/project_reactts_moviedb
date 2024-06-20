import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import styles from "./MovieCardComponent.module.css";
import {IMovie} from "../../models/Movies/IMovie";
import PosterPreviewComponent from "../PosterPreviewComponent/PosterPreviewComponent";
import {StarsRatingComponent} from "../StarsRatingComponent/StarsRatingComponent";


interface IProps {
    movie: IMovie;
}

export const MovieCardComponent: FC<IProps> = ({movie}) => {
        const navigate = useNavigate();

        return (
            <div className={styles.movie_card} onClick={() => {
                navigate(movie.id.toString(), {state: {movie: movie}});
            }}>
                <div className={styles.poster_preview}>
                    <PosterPreviewComponent key={movie.id} path={movie.poster_path}/>
                </div>
                <div>
                    {movie.title}
                </div>
                {/*<StarsRatingComponent movie={movie}/>*/}
            </div>
        );
    }
;

