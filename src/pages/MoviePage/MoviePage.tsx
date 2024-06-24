import React, {FC} from 'react';

import {MovieInfoComponent} from "../../components/MovieInfoComponent/MovieInfoComponent";
import styles from "./MoviePage.module.css";

const MoviePage: FC = () => {
    // const [triggerBadge, setTriggerBadge] = useState<boolean>(false);
    //2
    // const triggerBadgeFunc = (arg: boolean) => {
    //     setTriggerBadge(arg);
    // }

    return (
        <div className={styles.movie_page}>
            <MovieInfoComponent
                // triggerBadgeFunc={triggerBadgeFunc}
            />
        </div>
    );
};

export default MoviePage;