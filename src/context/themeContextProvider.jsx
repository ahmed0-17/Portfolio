import {useContext,useState,useEffect} from "react";
import themeContext from "./theme_context";

function ThemeContextProvider({children}) {
  const [theme, setTheme] = useState(()=>{return localStorage.getItem("theme") || "light"});


  useEffect(() => {
   localStorage.setItem("theme", theme);
}, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
}

export default ThemeContextProvider;