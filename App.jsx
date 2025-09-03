import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./App.css";

const App = () => {

  return ( 
      <ThemeProvider>
        <Header />
        <Outlet />
      </ThemeProvider>
  );
};

export default App;

//  <Header theme = {[isDark, setIsDark]}/>
//   <Outlet context = {[isDark, setIsDark]}/>

//   const App = () => {
//   const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("isDarkMode")))

//   return (
//     <ThemeContext.Provider value={[isDark, setIsDark]}>
//     <Header />
//     <Outlet />
//     </ThemeContext.Provider>
//   )
// }
