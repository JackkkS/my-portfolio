import React, { useState, createContext, useContext } from 'react'

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
    const [isLightMode, setIsLightMode] = useState(false);
  
    const toggleMode = () => {
      setIsLightMode((prevMode) => !prevMode);
    };

    const bgColorClass = isLightMode ? 'bg-white' : 'bg-zinc-900';
    const textClass = isLightMode ? 'text-black' : 'text-white'
    const bgCrad = isLightMode ?'bg-zinc-200 hover:bg-zinc-100' : 'bg-zinc-800 hover:bg-zinc-700';

    return(
        <ThemeContext.Provider value={{toggleMode, isLightMode, bgColorClass, textClass, bgCrad}}>
            {children}
        </ThemeContext.Provider>
    )
}

