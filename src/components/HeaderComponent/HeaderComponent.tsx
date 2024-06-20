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
                <div><NavLink to={"movies"} className={styles.navbar_text}>movies</NavLink></div>
                <div><NavLink to={"genres"} className={styles.navbar_text}>genres</NavLink></div>
                <div><NavLink to={"search"} className={styles.navbar_text}>search</NavLink></div>
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