import React, {FC} from 'react';

import styles from "./PosterPreviewComponent.module.css";
import {urls} from "../../constants/urls";

interface IProps {
    path: string
}

const PosterPreviewComponent: FC<IProps> = ({path}) => {
    return (
        <div className={styles.poster}>
            <img src={`${urls.poster_base}/${path}`} alt="movie poster"/>
        </div>
    );
};

export default PosterPreviewComponent;