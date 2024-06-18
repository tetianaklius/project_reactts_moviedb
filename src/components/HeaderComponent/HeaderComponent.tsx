import React from "react";
import {NavLink} from "react-router-dom";

import styles from "./HeaderComponent.module.css";
import UserInfoComponent from "../UserInfoComponent/UserInfoComponent";
import ThemeToggleComponent from "../ThemeToggleComponent/ThemeToggleComponent";

const HeaderComponent = () => {
    return (
        <div className={styles.header_common}>
            <div className={styles.logo_box}>logo</div>
            <div className={styles.navbar}>
                <div><NavLink to={"movies"}>movies</NavLink></div>
                <div><NavLink to={"genres"}>genres</NavLink></div>
                <div><NavLink to={"search"}>search</NavLink></div>
            </div>
            <div className={styles.theme_toggle}>
                <ThemeToggleComponent/>
            </div>
            <div className={styles.account_box}>
                <UserInfoComponent/>
            </div>
            <div></div>
        </div>
    );
};

export default HeaderComponent;