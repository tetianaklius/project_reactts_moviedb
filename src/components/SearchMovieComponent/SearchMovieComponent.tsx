import {SubmitHandler, useForm} from "react-hook-form";

import {useAppDispatch} from "../../redux/store";
import {moviesActions} from "../../redux/slices/moviesSlice";
import styles from "./SearchMovieComponent.module.css";

interface IProps {
    searchStr: string | null
}

export const SearchMovieComponent = () => {
    const {register, handleSubmit} = useForm<IProps>();
    const dispatch = useAppDispatch();

    const getSearchStr: SubmitHandler<IProps> = (searchStr) => {
        if (searchStr.searchStr !== "") {
            dispatch(moviesActions.changeQuery(searchStr.searchStr))
            localStorage.setItem("pageCurrent", "1");
        }
    };

    return (
        <div>
            <div className={styles.search_form_box}>
                <form onSubmit={handleSubmit(getSearchStr)}>
                    <input type="text" placeholder={"текст для пошуку"} {...register("searchStr")}/>
                    <button>Search</button>
                </form>
            </div>
        </div>
    );
};