import React, {FC} from 'react';

import styles from "./FooterComponent.module.css";
import logo from "../../files/blue_long_logo_2.svg";
import {moviesActions} from "../../redux/slices/moviesSlice";
import {useAppDispatch} from "../../redux/store";
import {useNavigate} from "react-router-dom";

const FooterComponent: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const allMovies = () => {
        localStorage.setItem("pageCurrent", "1");

        dispatch(moviesActions.changePage(1));
        navigate("movies");
    }

    return (
        <div className={styles.footer_box}>
            <img
                src={logo} alt="site logotype"
                onClick={() => {
                    allMovies();
                }}
            />
        </div>
    );
};

export default FooterComponent;