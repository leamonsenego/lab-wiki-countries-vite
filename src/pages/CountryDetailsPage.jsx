import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios, { Axios } from "axios";

function CountryDetails() {
  const [countryDetails, setCountryDetails] = useState(null);
  const { countryId } = useParams();
  //   console.log(countryId);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((response) => {
        setCountryDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [countryDetails]);
  console.log(countryDetails);
  if (!countryDetails) {
    return <p> Loading...</p>;
  } else {
    return (
      <div>
        <div>
          <p>Name: {countryDetails.name.common}</p>
          <p> Capital: {countryDetails.capital}</p>
          <img
            className="flag"
            src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`}
          />
          <p>
            Borders:
            {countryDetails.borders.map((bordering) => (
              <Link to={`/${bordering}`}>
                <p>{bordering}</p>
              </Link>
            ))}
          </p>
          <p>Area: {countryDetails.area}</p>
        </div>
      </div>
    );
  }
}

export default CountryDetails;
