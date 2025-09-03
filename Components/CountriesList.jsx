import { useEffect, useState } from "react";
// import countriesData from "../countriesData";
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";

const CountriesList = ({ query }) => {
  // const [query, setQuery] = useState("");
  // const filteredCountries = countriesData.filter((country) =>
  //   country.name.common.toLowerCase().includes("")
  // );
  // console.log(filteredCountries);

  // let countriesData = []

  const [countriesData, setCountriesData] = useState([]);

  // console.log(countriesData);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,population,area,languages,currencies,borders,flags"
    )
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });

  }, []);

  return (
    <>
    {countriesData.length === 0? <CountriesListShimmer /> :
      <div className="countries-container">
        {countriesData
          .filter((country) =>
            country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
          )
          .map((country) => {
            return (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population.toLocaleString("en-IN")}
                region={country.region}
                capital={country.capital?.[0]}
                data={country}
              />
            );
          })}
      </div>}
    </>
  );
};

export default CountriesList;

// console.log(countriesData);
// const array = [
//                 <CountryCard />,
//                 <CountryCard />,
//                 <CountryCard />,
//                 <CountryCard />
//             ]
//         console.log(array);

//   const array = countriesData.map((country, index) => {
//     // console.log(country, index);
//     return(
//     <CountryCard
//     key = {country.name.common}
//     name={country.name.common}
//     flag={country.flags.svg}
//     population ={country.population.toLocaleString("en-IN")}
//     region = {country.region}
//     capital={country.capital?.[0]}
//     />
//     )
//   });

// console.log(array);
