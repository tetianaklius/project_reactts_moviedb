import {IColorTheme} from "../models/Theme/IColorTheme";

const light: IColorTheme = {
    background: "rgb(255,255,255)",
    color: "rgb(0,0,0)"
}

const dark: IColorTheme = {
    background: "rgb(0,0,0)",
    color: "rgb(255,255,255)"
}

export const colorThemes = {
    light,
    dark
}