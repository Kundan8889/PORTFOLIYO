import { useState,createContext,useContext } from "react";
const ThemeContext=createContext();
const ThemeProvide=({Children})=>{
    const[theme,setTheme]=useState("light");
    return(
        <ThemeContext.Provider value={[the,setTheme]}>
            {Children}
        </ThemeContext.Provider>
    )
}
const useTheme=()=>useContext(ThemeContext);
export {useTheme,ThemeProvide}