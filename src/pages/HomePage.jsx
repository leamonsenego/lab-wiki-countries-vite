import axios, { Axios } from "axios";
import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        setCountries(response.data);
        console.log(countries);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Countries</h1>
      <ul className="container ">
        {countries.map((country) => (
          <li className="d-flex flex-col justify-content-left countries">
            <Link to={`/${country.alpha3Code}`} key={country._id}>
              <img
                className="flag"
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              />
              {country.name.common}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
