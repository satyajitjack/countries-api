import "./CountriesListShimmer.css";

const CountriesListShimmer = () => {
  // new Array(10).fill(undefined)

  //  const mapped = Array.from({length:10}).map((ele, i)=> {
  //    return <div key={i} className="country-card shimmer-card"></div>
  // })

  // console.log(mapped);
  return (
    <div className="countries-container">
      {/* {mapped} */}
      {Array.from({ length: 10 }).map((ele, i) => {
        return <div key={i} className="country-card shimmer-card"></div>;
      })}
    </div>
  );
};

export default CountriesListShimmer;
