import React from 'react';

import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import styles from "./ErrorLayout.module.css";
import {useAppSelector} from "../../redux/store";
import ErrorMessageComponent from "../../components/ErrorMessageComponent/ErrorMessageComponent";

const ErrorLayout = () => {
    const {useDarkTheme} = useAppSelector(state => state.genresSlice);

    return (
        <div className={useDarkTheme ? styles.error_page_dark : styles.error_page_light}>
            <HeaderComponent/>
            <ErrorMessageComponent/>
        </div>
    );
};

export default ErrorLayout;