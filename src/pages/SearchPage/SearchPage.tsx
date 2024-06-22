import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../redux/store";
import {ISearchParams} from "../../models/Search/SearchParams";
import {moviesActions} from "../../redux/slices/moviesSlice";
import MoviesComponent from "../../components/MoviesComponent/MoviesComponent";
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent";
import {SearchMovieComponent} from "../../components/SearchMovieComponent/SearchMovieComponent";
import styles from "./SearchPage.module.css";


export const SearchPage = () => {

    const dispatch = useAppDispatch();
    const {currentPage, query} = useAppSelector(state => state.moviesSlice);

    const pageCurrentStorage = localStorage.getItem("pageCurrent");

    const params: ISearchParams = {
        page: pageCurrentStorage,
        language: "uk-UA",
        query: query,
        sort_by: "vote_count.desc"
    }
    useEffect(() => {
        if (pageCurrentStorage) dispatch(moviesActions.loadMovies(params))
    }, [query, currentPage]);

    return (
        <div className={styles.search_page}>
            <SearchMovieComponent/>
            {query && <PaginationComponent/>}
            {query && <MoviesComponent/>}
            {query && <PaginationComponent/>}
        </div>
    );
};