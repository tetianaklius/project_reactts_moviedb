import React, {FC} from 'react';

import {IGenre} from "../../models/Genres/IGenre";
import styles from "./GenreComponent.module.css";
import {useAppDispatch} from "../../redux/store";
import {moviesActions} from "../../redux/slices/moviesSlice";
import {genresActions} from "../../redux/slices/genresSlice";

interface IProps {
    genre: IGenre
}

const GenreComponent: FC<IProps> = ({genre}) => {
    const dispatch = useAppDispatch();

    const saveGenre = (): void => {
        if (genre.id) {
            localStorage.setItem("genreCurrent", `${genre.id}`);
            localStorage.setItem("pageCurrent", "1");

            dispatch(moviesActions.changeQuery(null));
            dispatch(moviesActions.changePage(1));
            dispatch(genresActions.changeGenreCurrent(genre.id));
        }
    }

    return (
        <div
            className={styles.genre_box}
            onClick={() => {
                saveGenre();
            }}
        >
            <div className={styles.genre_name}>
                {genre.name}
            </div>
        </div>
    );
};

export default GenreComponent;