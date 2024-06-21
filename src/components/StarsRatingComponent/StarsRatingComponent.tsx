import React, {FC} from 'react';
import Rating from "@mui/material/Rating";

import styles from "./StarsRatingComponent.module.css";
import {IMovie} from "../../models/Movies/IMovie";

interface IProps {
    movie: IMovie
}

export const StarsRatingComponent: FC<IProps> = ({movie}) => {

    return (
        <div className={styles.stars_box}>
            <Rating name="stars-rating" value={movie.vote_average} precision={0.1} max={10} size="small" readOnly/>
            <div className={styles.vote_average}>{movie.vote_average}</div>
        </div>
    );
};