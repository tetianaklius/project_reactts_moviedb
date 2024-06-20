import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../redux/store";
import GenreComponent from "../GenreComponent/GenreComponent";
import styles from "./GenresComponent.module.css";
import {genresActions} from "../../redux/slices/genresSlice";

const GenresComponent = () => {
    const {genres, currentGenre} = useAppSelector(state => state.genresSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genresActions.loadGenres())
    }, [currentGenre]);

    return (
        <div className={styles.genres_container}>
            {
                genres ?
                    genres.genres.map(genre => <GenreComponent key={genre.id}
                                                               genre={genre}/>)
                    : <h3>Loading...</h3>
            }
        </div>
    );
};

export default GenresComponent;