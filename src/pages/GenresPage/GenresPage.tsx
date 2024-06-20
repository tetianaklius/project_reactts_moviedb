import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../redux/store";
import GenresComponent from "../../components/GenresComponent/GenresComponent";
import {ISearchParams} from "../../models/Search/SearchParams";
import {moviesActions} from "../../redux/slices/moviesSlice";
import MoviesComponent from "../../components/MoviesComponent/MoviesComponent";
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent";

const GenresPage: FC = () => {
    const dispatch = useAppDispatch();
    const {currentPage} = useAppSelector(state => state.moviesSlice);
    const {currentGenre, genres} = useAppSelector(state => state.genresSlice);

    const storageCurrentGenre = localStorage.getItem("genreCurrent");
    const storageCurrentPage = localStorage.getItem("pageCurrent");

    let currGenre = null;
    if (storageCurrentGenre) {
        currGenre = genres?.genres.filter(value => value.id === +storageCurrentGenre)[0];
    }

    const params: ISearchParams = {
        page: storageCurrentPage,
        with_genres: storageCurrentGenre,
        language: "uk-UA",
        sort_by: "vote_count.desc"
    }

    useEffect((): void => {
        if (storageCurrentGenre) {
            dispatch(moviesActions.loadMovies(params))
        }
    }, [currentGenre, currentPage]);

    return (
        <div>
            <GenresComponent/>
            <div>
                {currGenre ?
                    <>
                        <h3>Фільми для жанру {currGenre.name}</h3>
                        <MoviesComponent/>
                        <PaginationComponent/>
                    </>
                    : ""}
            </div>
        </div>
    );
};

export default GenresPage;