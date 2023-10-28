import "/src/styles/CountryDetails.css"
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from "axios";


function CountryDetails() {
  const {countryId} = useParams()
  const [countryDetails, setCountryDetails] = useState("")

  useEffect(() => {
    axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then(response => {setCountryDetails(response.data)})
      .catch(error => {console.error('There was an error!', error)})
  }, [])

  console.log(countryDetails)


  if (!countryDetails) {
    return (<div> Loading... </div>)
  } else {

    return (
      <div>
        <h1 className={"wiki-subtitle"}> Country Details</h1>
        <table className="table">
          <thead></thead>
          <tbody>
          <tr>
            <td>Name</td>
            <td>{countryDetails.name.common}</td>
          </tr>
          <tr>
            <td>Capital</td>
            <td>{countryDetails.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryDetails.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              {countryDetails.borders.map(eachBorder => {
                return (
                  <p key={countryDetails.alpha3Code}>
                    <Link to={`/${countryDetails.alpha3Code}`}>{eachBorder}</Link>
                  </p>
                )
              })}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
}


export default CountryDetails;
