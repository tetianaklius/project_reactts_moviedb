import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

import MoviesComponent from "../../components/MoviesComponent/MoviesComponent";
import {useAppDispatch} from "../../redux/store";
import {moviesActions} from "../../redux/slices/moviesSlice";
import styles from "./MoviesPage.module.css";


const MoviesPage = () => {
    const {page} = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (page) {
            dispatch(moviesActions.loadMovies(page))
        } else {
            dispatch(moviesActions.loadMovies("1"))
        }

    }, [page])

    return (
        <div className={styles.main}>
            {/*<PaginationComponent page={"1"}/>*/}
            <MoviesComponent/>
        </div>
    );
};

export default MoviesPage;