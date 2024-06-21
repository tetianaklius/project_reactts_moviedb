import React, {useContext} from 'react';

import {ColorThemeContext} from "../../context/colorThemeContext";

const ThemeToggleComponent = () => {
    const {toggleTheme} = useContext(ColorThemeContext);
    return (
        <div>
            <button onClick={() => toggleTheme}></button>
        </div>
    );
};

export default ThemeToggleComponent;