import React from 'react';
import {Outlet} from "react-router-dom";

import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import styles from "./MainLayout.module.css";
import {colorThemes} from "../constants/colorTheme";
import {useAppSelector} from "../redux/store";

const MainLayout = () => {
    const {useDarkTheme} = useAppSelector(state => state.genresSlice);

    return (
        <div
            className={styles.main_layout}
            style={useDarkTheme
                ? colorThemes.dark
                : colorThemes.light}
        >
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </div>
    );
};

export default MainLayout;