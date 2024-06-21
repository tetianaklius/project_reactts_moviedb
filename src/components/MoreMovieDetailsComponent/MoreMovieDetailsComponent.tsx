import React, {FC} from 'react';

import {useAppSelector} from "../../redux/store";
import styles from "./MoreMovieDetailsComponent.module.css";
import {useParams} from "react-router-dom";

const MoreMovieDetailsComponent: FC = () => {
    const {movieDetailed} = useAppSelector(state => state.moviesSlice);
    const {language} = useParams();
    console.log(language)
    return (
        <div className={styles.more_info_box}>
            <div className={styles.text_box}>
                <div>бюджет фільму: ${movieDetailed?.budget}</div>
                <div>країна: {movieDetailed?.origin_country}</div>
                <div>тривалість: {movieDetailed?.runtime} хв</div>
            </div>
            {/*{language === "uk-UA" ?*/}
            {/*    <div>бюджет фільму: ${movieDetailed?.budget}</div>*/}
            {/*    :*/}
            {/*    <div>movie budget: ${movieDetailed?.budget}</div>*/}
            {/*}*/}
            {/*<div> origin country: {movieDetailed?.origin_country}</div>*/}
            {/*<div> runtime: {movieDetailed?.runtime} min</div>*/}


        </div>
    );
};

export default MoreMovieDetailsComponent;