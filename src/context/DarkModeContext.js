import React from "react";
import { useContext, useState } from "react";

const ThemeContext = React.createContext()
const ToggleTheme = React.createContext()

export const useTheme = () => {
    return useContext(ThemeContext)
};
export const useThemeUpdate = () => {
    return useContext(ToggleTheme)
};

const DarkModeContext = ({ children }) => {
    const [dark, setDark] = useState(true);

    const darkModeToggle = () => {
        setDark(prev => !prev)
    }
    return (
        <ThemeContext.Provider value={dark}>
            <ToggleTheme.Provider value={darkModeToggle}>
                {children}
            </ToggleTheme.Provider>
        </ThemeContext.Provider>
    );
};

export default DarkModeContext;