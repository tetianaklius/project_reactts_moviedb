import {createContext} from "react";

import {colorThemes} from "../constants/colorTheme";


const ColorThemeContext = createContext({
    switchOn: false, theme: colorThemes.dark, toggleTheme: () => {
    }
});

export {ColorThemeContext};