import React, {FC} from 'react';

import {useAppDispatch, useAppSelector} from "../../redux/store";
import {moviesActions} from "../../redux/slices/moviesSlice";
import styles from "./PaginationComponent.module.css";

const PaginationComponent: FC = () => {
    const dispatch = useAppDispatch();
    const {total_pages, total_results, query} = useAppSelector(state => state.moviesSlice);
    const pageStr = localStorage.getItem("pageCurrent");

    let page: number = 1;
    if (pageStr) {
        page = +pageStr;
    }
    const prev: number = page - 1;
    let next;
    if (total_pages) {
        next = (page < total_pages) ? page + 1 : null;
    }

    const changePage = (action: string) => {
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
        <div>
            <h3>Пошук {total_results} фільмів
                {query ? <> для слова <span className={styles.SearchKey}>{query}</span> </> : ""}
            </h3>

            <button onClick={() => {
                changePage("prev");
            }}
                    disabled={!prev}
            >prev
            </button>

            <div> {page}</div>

            <button onClick={() => {
                changePage("next");
            }}
                    disabled={!next}
            >next
            </button>

            <div> всього сторінок : {total_pages}</div>
        </div>
    );
};

export default PaginationComponent;