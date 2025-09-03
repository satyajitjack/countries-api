import countriesData from "../countriesData";
import { useState } from "react";

export const SearchBar = ({setQuery}) => {
    
  return (
    <div className="search-container">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input onChange={(e)=> setQuery(e.target.value.toLowerCase())} type="text" placeholder="Search for a Country..." fdprocessedid="bj4085"/>
        </div>
  )
}



