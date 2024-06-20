import React, {FC} from 'react';

import {useAppSelector} from "../../redux/store";
import styles from "./MoreMovieDetailsComponent.module.css";

const MoreMovieDetailsComponent: FC = () => {
    const {movieDetailed} = useAppSelector(state => state.moviesSlice);

    return (
        <div className={styles.more_info_box}>
           <div> movie budget: {movieDetailed?.budget} $</div>
           <div> origin country: {movieDetailed?.origin_country}</div>
           <div> runtime: {movieDetailed?.runtime} min</div>
        </div>
    );
};

export default MoreMovieDetailsComponent;