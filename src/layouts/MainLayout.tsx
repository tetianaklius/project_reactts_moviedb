import React, {useState} from 'react';
import {Outlet} from "react-router-dom";

import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import styles from "./MainLayout.module.css";
import {colorThemes} from "../constants/colorTheme";
import {ColorThemeContext} from "../context/colorThemeContext";
import {IColorTheme} from "../models/Theme/IColorTheme";

const MainLayout = () => {
    const [currentTheme, setCurrentTheme] = useState<IColorTheme>(colorThemes.dark);
    const [switchOn, setSwitchOn] = useState<boolean>(false);

    const toggleTheme = (): void => {
        setSwitchOn((prevState: boolean) => !prevState); //true

        // if (currentTheme === colorThemes.dark) {
        //     setCurrentTheme(colorThemes.light);
        // } else {
        //     setCurrentTheme(colorThemes.dark);
        // }

        setCurrentTheme((prevState: IColorTheme): IColorTheme =>
            prevState === colorThemes.light ? colorThemes.dark : colorThemes.light
        ); // темна--> світла
    };

    return (
        <ColorThemeContext.Provider value={{switchOn: switchOn, theme: currentTheme, toggleTheme: toggleTheme}}>
            <div
                className={styles.main_layout}
                style={{background: currentTheme.background, color: currentTheme.color}}
            >
                <HeaderComponent/>
                <Outlet/>
                <FooterComponent/>
            </div>
        </ColorThemeContext.Provider>
    );
};

export default MainLayout;