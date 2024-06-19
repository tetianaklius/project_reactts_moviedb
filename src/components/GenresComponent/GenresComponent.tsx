import React from 'react';

import {useAppSelector} from "../../redux/store";
import GenreComponent from "../GenreComponent/GenreComponent";
import styles from "./GenresComponent.module.css";

const GenresComponent = () => {
    const {genres} = useAppSelector(state => state.genresSlice);

    return (
        <div className={styles.genres_container}>
            {
                // isLoaded?  &&
                genres ?
                    genres.genres.map(genre => <GenreComponent key={genre.id}
                                                               genre={genre}/>)
                    : <h3>Loading...</h3>
            }
        </div>
    );
};

export default GenresComponent;