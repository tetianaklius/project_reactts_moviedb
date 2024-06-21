import React, {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import Switch from "@mui/material/Switch";

import styles from "./HeaderComponent.module.css";
import UserInfoComponent from "../UserInfoComponent/UserInfoComponent";
import {useAppDispatch} from "../../redux/store";
import {ColorThemeContext} from "../../context/colorThemeContext";
import {genresActions} from "../../redux/slices/genresSlice";
import {moviesActions} from "../../redux/slices/moviesSlice";

const HeaderComponent = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {toggleTheme} = useContext(ColorThemeContext);
    const [checked, setChecked] = useState<boolean>(false);

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

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        toggleTheme();
    };
    // const styleToggle = styleSwitch();

    return (
        <div className={styles.header_common}>
            <div className={styles.logo_box}>logo</div>
            <div className={styles.navbar}>
                <div>
                    <div className={styles.navbar_text} onClick={() => {
                        allMovies();
                    }}>Фільми
                    </div>
                </div>
                <div>
                    <div className={styles.navbar_text} onClick={() => {
                        byGenres();
                    }}>Жанри
                    </div>
                </div>
                <div>
                    <div className={styles.navbar_text} onClick={() => {
                        search();
                    }}>Пошук
                    </div>
                </div>
            </div>
            <div className={styles.theme_toggle}>
                <Switch checked={checked}

                        onChange={handleChange}
                        inputProps={{"aria-label": "controlled"}}
                />
            </div>
            <div className={styles.account_box}>
                <UserInfoComponent/>
            </div>
            <div></div>
        </div>
    );
};

export default HeaderComponent;