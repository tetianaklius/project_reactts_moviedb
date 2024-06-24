import React, {FC} from 'react';

import {useAppDispatch, useAppSelector} from "../../redux/store";
import {moviesActions} from "../../redux/slices/moviesSlice";
import styles from "./PaginationComponent.module.css";
import {colorThemes} from "../../constants/colorTheme";

const PaginationComponent: FC = () => {
    const dispatch = useAppDispatch();
    const {moviesPag, query} = useAppSelector(state => state.moviesSlice);
    const {useDarkTheme} = useAppSelector(state => state.genresSlice);
    const pageStr = localStorage.getItem("pageCurrent");

    let page: number = 1;
    if (pageStr) {
        page = +pageStr;
    }
    const prev: number = page - 1;
    let next;
    if (moviesPag?.total_pages) {
        next = (page < moviesPag.total_pages) ? page + 1 : null;
    }

    const changePage = (action: string): void => {
        switch (action) {
            case "next":
                dispatch(moviesActions.changePage(page + 1));
                localStorage.setItem("pageCurrent", `${page + 1}`);
                break;
            case "prev":
                dispatch(moviesActions.changePage(page - 1));
                localStorage.setItem("pageCurrent", `${page - 1}`);
                break;
        }
    }

    return (
        <div
            className={styles.pagination_box}
            style={useDarkTheme
                ? colorThemes.dark
                : colorThemes.light}
        >
            <h5>Пошук серед {moviesPag?.total_results} фільмів
                {query ? <> для слова <span className={styles.SearchKey}>«{query}»</span> </> : ""}
            </h5>
            <div className={styles.buttons}>
                <button
                    onClick={() => {
                        changePage("prev");
                    }}
                    className={`${styles.button_prev_next} ${styles.left}`}
                    disabled={!prev}
                >&laquo;
                </button>
                <button
                    onClick={() => {
                        changePage("next");
                    }}
                    className={`${styles.button_prev_next} ${styles.right}`}
                    disabled={!next}
                >&raquo;
                </button>
            </div>
            <div className={styles.page_num}>
                <span className={styles.currPage}>сторінка {page}</span>
                <span className={styles.totalPage}>/{moviesPag?.total_pages}</span>
            </div>
        </div>
    );
};

export default PaginationComponent;