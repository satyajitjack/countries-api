import { useState } from "react";
import { SearchBar } from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
// import { ThemeContext } from "../contexts/ThemeContext";
// import { useWindowSize } from "../hooks/useWindowSize";
import { useTheme } from "../hooks/useTheme";

export default function Home() {
  const [query, setQuery] = useState("");
  const [isDark] = useTheme();
  // console.log(isDark);
  // const windowSize =  useWindowSize();



  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery} />
      </div>
      <CountriesList query={query} />
    </main>
  );
}










//const [isDark] = useContext(ThemeContext);

//  <h1 style={{ textAlign: "center" }}>
//         {windowSize.width} X {windowSize.height}
//       </h1>



  // const [windowSize, setWindowSize] = useState({
  //   width: window.innerWidth,
  //   height: window.innerHeight,
  // });
  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  //   });
  // }, []);
