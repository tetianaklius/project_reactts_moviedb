import React, {FC, useEffect} from 'react';

import MoviesComponent from "../../components/MoviesComponent/MoviesComponent";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {moviesActions} from "../../redux/slices/moviesSlice";
import styles from "./MoviesPage.module.css";
import {ISearchParams} from "../../models/Search/SearchParams";
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent";


const MoviesPage: FC = () => {
    const dispatch = useAppDispatch();
    const {currentPage} = useAppSelector(state => state.moviesSlice);

    const storageCurrentPage = localStorage.getItem("pageCurrent");
    const params: ISearchParams = {
        page: storageCurrentPage,
        language: "uk-UA",
        sort_by: "vote_count.desc"
    }

    useEffect((): void => {
        dispatch(moviesActions.loadMovies(params));

    }, [currentPage]);

    return (
        <div className={styles.main}>
            <MoviesComponent/>
            <PaginationComponent/>
        </div>
    );
};

export default MoviesPage;