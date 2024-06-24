import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {useAppDispatch} from "../../redux/store";
import {moviesActions} from "../../redux/slices/moviesSlice";
import styles from "./SearchMovieComponent.module.css";
import {searchReqValidator} from "../../validators/searchReqValidator";
import {FC} from "react";

interface IProps {
    searchStr: string | null
}

export const SearchMovieComponent: FC = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<IProps>({
        mode: "all",
        resolver: joiResolver(searchReqValidator)
    });
    const dispatch = useAppDispatch();

    const getSearchStr: SubmitHandler<IProps> = (searchStr) => {
        if (searchStr.searchStr !== "") {
            dispatch(moviesActions.changeQuery(searchStr.searchStr))
            localStorage.setItem("pageCurrent", "1");
        }
        resetForm();
    };

    const resetForm = () => {
        let form1 = document.forms[0];
        form1.reset();
    }

    return (
        <div>
            <div className={styles.search_form_box}>
                <form onSubmit={handleSubmit(getSearchStr)}>
                    <input id={styles.input_1} type="text" placeholder={"Текст для пошуку"} {...register("searchStr")}/>
                    <button id={styles.button_1}>Search</button>
                    <div>{errors.searchStr && <span>{errors.searchStr.message}</span>}</div>
                </form>
            </div>

        </div>
    );
};