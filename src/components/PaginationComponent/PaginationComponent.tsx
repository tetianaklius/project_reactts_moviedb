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
        <div className={styles.pagination_box}>
            <h5>Пошук серед {total_results} фільмів
                {query ? <> для слова <span className={styles.SearchKey}>«{query}»</span> </> : ""}
            </h5>
            <div>
                <button
                    onClick={() => {
                        changePage("prev");
                    }}
                    className={styles.button_prev_next}
                    disabled={!prev}
                >prev
                </button>
                <button
                    onClick={() => {
                        changePage("next");
                    }}
                    className={styles.button_prev_next}
                    disabled={!next}
                >next
                </button>
            </div>
            <div className={styles.page_num}>
                <span>сторінка {page}</span>/{total_pages}
            </div>
        </div>
    );
};

export default PaginationComponent;