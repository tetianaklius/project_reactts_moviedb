import React, {FC, useState} from 'react';

import {IGenre} from "../../models/Genres/IGenre";
import styles from "./GenreComponent.module.css";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {moviesActions} from "../../redux/slices/moviesSlice";

interface IProps {
    genre: IGenre
}

const GenreComponent: FC<IProps> = ({genre}) => {
    const [trigger, setTrigger] = useState<boolean>(false);
    const {moviesPag} = useAppSelector(state => state.moviesSlice);
    const dispatch = useAppDispatch();

    const moviesArray = moviesPag?.results;
    const moviesOfGenre = moviesArray?.filter(movie => movie.genre_ids.includes(genre.id));
    console.log(moviesOfGenre)


    return (
        <div
            className={styles.genre_box}
            onClick={() => {
                if (moviesOfGenre) {
                    dispatch(moviesActions.saveMoviesFilteredByGenre(moviesOfGenre));
                }
                setTrigger(true);
            }} //todo запит dispatch або відфільтрувати і передати фільми в moviesComp
        >
            <div className={styles.genre_name}>
                {genre.name}

                {}
            </div>
        </div>
    );
};

export default GenreComponent;