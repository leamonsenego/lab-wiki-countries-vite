import "./App.css";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <h1>LAB | React WikiCountries</h1>
      <Navbar />
      <Routes>
        <Route className="navbar-brand " path="/" element={<HomePage />}>
          Home
        </Route>
        <Route path="/:countryId" element={<CountryDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
