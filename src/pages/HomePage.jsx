import '/src/styles/HomePage.css'
import {useEffect, useState} from "react";
import axios, { Axios } from "axios";
import { Link } from "react-router-dom";



function HomePage() {

  const [country, setCountry] = useState([])


  useEffect(() => {
    axios.get(`https://ih-countries-api.herokuapp.com/countries`)
      .then(response => {setCountry(response.data)})
      .catch(error => {console.error('There was an error!', error)})
  }, [])

  console.log(country)


  return(
    <div className={"homepage-container"}>
      <nav className={"navbar"}>
      <h1 className={"wiki-subtitle"}> WikiCountries: Your Guide to the World. </h1>

        <div className="list-group">

          {
            country.map((country) => {
              return (
                <Link to={`/${country.alpha3Code}`} key={country._id}>
                  <p> {country.name.common} </p>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
                </Link>

              )
            })
          }
          </div>
      </nav>
    </div>
  )
}

export default HomePage;
