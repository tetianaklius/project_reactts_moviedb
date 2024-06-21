import React, {FC} from 'react';
import Rating from "@mui/material/Rating";

import styles from "../MovieCardComponent/MovieCardComponent.module.css";
import {IMovie} from "../../models/Movies/IMovie";

interface IProps {
    movie: IMovie
}

export const StarsRatingComponent: FC<IProps> = ({movie}) => {

    return (
        <div className={styles.stars_box}>
            <div>
                <Rating name="stars-rating" value={movie.vote_average} precision={0.1} max={10} size='small' readOnly/>
                {movie.vote_average} {movie.title} {movie.vote_count}
            </div>
        </div>
    );
};