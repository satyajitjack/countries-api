// import { useContext } from "react";
// import { ThemeContext } from "../contexts/ThemeContext";
import { useTheme } from "../hooks/useTheme";


const Header = () => {
  const [isDark, setIsDark] = useTheme();

  // console.log(typeof (JSON.parse(localStorage.getItem("isDarkMode"))));

  // if(isDark){
  //   document.body.classList.add("dark")
  // }else{
  //   document.body.classList.remove("dark")
  // }

  return (
    <header className={`header ${isDark? "dark": ""}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="index.html">Where in the world?</a>
        </h2>
        <p className="theme-switch" onClick={()=>{
          setIsDark(!isDark)
          localStorage.setItem('isDarkMode', !isDark)
        }}>
          <i className={`fa-solid fa-${isDark? "sun":"moon"}`}></i>&nbsp;&nbsp;{isDark? "Light":"Dark"} Mode
        </p>
      </div>
    </header>
  );
};

export default Header;


// const [isDark, setIsDark] = useContext(ThemeContext)