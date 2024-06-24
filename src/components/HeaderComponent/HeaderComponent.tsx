import React, {FC} from "react";
import {useNavigate} from "react-router-dom";
import Switch from "@mui/material/Switch";

import styles from "./HeaderComponent.module.css";
import UserInfoComponent from "../UserInfoComponent/UserInfoComponent";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {genresActions} from "../../redux/slices/genresSlice";
import {moviesActions} from "../../redux/slices/moviesSlice";
import {colorThemes} from "../../constants/colorTheme";
import logo from "../../files/blue_long_logo.svg";

const HeaderComponent: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {useDarkTheme} = useAppSelector(state => state.genresSlice);

    const allMovies = () => {
        localStorage.setItem("pageCurrent", "1");

        dispatch(moviesActions.changePage(1));
        navigate("movies");
    }

    const byGenres = () => {
        localStorage.removeItem("genreCurrent");
        localStorage.setItem("pageCurrent", "1");

        dispatch(moviesActions.changePage(1));
        dispatch(genresActions.changeGenreCurrent(null));
        navigate("genres");
    }
    const search = () => {
        localStorage.setItem("pageCurrent", "1");

        dispatch(moviesActions.changeQuery(null));
        dispatch(moviesActions.changePage(1));
        navigate('search')
    }

    const handleChange = () => {
        dispatch(genresActions.changeTheme(!useDarkTheme));
    };

    const BackButton = () => {
        navigate(-1);
    }

    return (
        <div className={styles.header_common}>
            <div
                onClick={() => BackButton()}
                className={styles.back_button}
            >Назад&laquo;&laquo;&laquo;
            </div>
            <div
                className={styles.logo_box}
                onClick={() => {
                    allMovies();
                }}
            >
                <img src={logo} alt="logotype"/>
            </div>
            <div className={styles.navbar}>
                <div className={styles.navbar_item} onClick={() => {
                    allMovies();
                }}>Фільми
                </div>
                <div className={styles.navbar_item} onClick={() => {
                    byGenres();
                }}>Жанри
                </div>
                <div className={styles.navbar_item} onClick={() => {
                    search();
                }}>Пошук
                </div>
            </div>
            <div className={styles.theme_toggle}>
                <Switch
                    onChange={handleChange}
                    inputProps={{"aria-label": "controlled"}}
                    style={useDarkTheme
                        ? colorThemes.dark
                        : colorThemes.light}
                />
            </div>
            <div className={styles.account_box}>
                <UserInfoComponent/>
            </div>
        </div>
    );
};

export default HeaderComponent;