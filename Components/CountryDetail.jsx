import {useEffect, useState } from "react";
import "./countryDetails.css";
import { Link, useLocation, useParams } from "react-router-dom";
// import { ThemeContext } from "../contexts/ThemeContext";
// import { useWindowSize } from "../hooks/useWindowSize.jsx";
// import CountryDetailShimmer from "./CountryDetailShimmer";
import { useTheme } from "../hooks/useTheme.jsx";

export default function CountryDetail() {
  // const countryName = new URLSearchParams(location.search).get("name");
  const params = useParams();
  // console.log(params);
  const { state } = useLocation();
  // console.log(state);



  const [isDark] = useTheme();

  const countryName = params.country;
  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  // const windowSize = useWindowSize();
  // console.log(countryData);

  function updateCountryData(data) {
    setCountryData({
      name: data.name.common,
      nativeName: Object.values(data.name.nativeName)[0].common,
      population: data.population,
      region: data.region,
      subregion: data.subregion,
      capital: data.capital,
      tld: data.tld,
      flag: data.flags.svg,
      language: Object.values(data.languages).join(", "),
      currency: Object.values(data.currencies)
        .map((currency) => currency.name)
        .join(", "),
      borders: [],
    });
    // console.log(data.borders);
    if (!data.borders) {
      data.borders = [];
    }
    Promise.all(
      data.borders.map((border) =>
        fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common)
      )
    ).then((borders) => {
      // console.log(borders);
      setTimeout(() =>
        setCountryData((prevState) => ({ ...prevState, borders }))
      );
    });
  }

  // console.log(countryData?.borders);

  useEffect(() => {
    if (state) {
      console.log("Using state — not fetching");
      updateCountryData(state);
      return;
    }
    // console.log("this is inside useEffect");
    console.log("No state — fetching data from API");
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        // console.log(data);
        updateCountryData(data);
      })
      .catch((err) => {
        console.log(err);
        setNotFound(true);
      });
  }, [countryName]);

  if (notFound) {
    return <div>Country not found</div>;
  }

  //  console.log(countryData);

  return countryData === null ? (
    "Loading..."
  ) : (
    <main className={`${isDark ? "dark" : ""}`}>
      <div
        className="country-de
      tails-container"
      >
        <span className="back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left" />
          &nbsp;&nbsp;Back
        </span>
        <div className="country-details">
          <img src={countryData.flag} alt={`${countryData.name} flag`} />
          <div className="details-text-container">
            <h2>{countryData.name}</h2>
            <div className="details-text">
              <p>
                <b>Native Name: {countryData.nativeName}</b>
                <span className="native-name" />
              </p>
              <p>
                <b>
                  Population: {countryData.population.toLocaleString("en-IN")}
                </b>
                <span className="population" />
              </p>
              <p>
                <b>Region: {countryData.region}</b>
                <span className="region" />
              </p>
              <p>
                <b>Sub Region: {countryData.subregion}</b>
                <span className="sub-region" />
              </p>
              <p>
                <b>Capital: {countryData.capital.join(", ")}</b>
                <span className="capital" />
              </p>
              <p>
                <b>Top Level Domain: {countryData.tld}</b>
                <span className="top-level-domain" />
              </p>
              <p>
                <b>Currencies: {countryData.currency}</b>
                <span className="currencies" />
              </p>
              <p>
                <b>Languages: {countryData.language}</b>
                <span className="languages" />
              </p>
            </div>
            {countryData.borders.length !== 0 && (
              <div className="border-countries">
                <b>Border Countries:</b>&nbsp;
                {countryData.borders.map((border) => (
                  <Link key={border} to={`/${border}`}>
                    {border}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}








//  const [isDark] = useContext(ThemeContext);

  // <h1 style={{ textAlign: "center" }}>
  //       {windowSize.width} X {windowSize.height}
  //     </h1>