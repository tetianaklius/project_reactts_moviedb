import React, {FC} from 'react';

import {useAppSelector} from "../../redux/store";
import styles from "./MoreMovieDetailsComponent.module.css";

const MoreMovieDetailsComponent: FC = () => {
    const {movieDetailed} = useAppSelector(state => state.moviesSlice);
    console.log(movieDetailed?.adult)
    return (
        <div className={styles.more_info_box}>
            <div className={styles.text_box}>
                <div>бюджет фільму: ${movieDetailed?.budget}</div>
                <div>країна: {movieDetailed?.origin_country}</div>
                <div>тривалість: {movieDetailed?.runtime} хв</div>
                <div>оцінка: {movieDetailed?.vote_average}/10</div>
                <b>{movieDetailed?.adult && <div>фільм для дорослих: так</div>}</b>
            </div>
        </div>
    );
};

export default MoreMovieDetailsComponent;