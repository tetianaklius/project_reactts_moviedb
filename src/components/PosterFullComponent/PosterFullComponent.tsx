import React, {FC} from 'react';

import {useLocation} from "react-router-dom";
import styles from "./PosterFullComponent.module.css";

const PosterFullComponent: FC = () => {
    const location = useLocation();
    const img_path: string = location.state.img_path;

    return (
        <div>
            <div className={styles.poster_frame}>
                <img src={img_path} alt="full screen poster"/>
            </div>
        </div>
    );
};

export default PosterFullComponent;