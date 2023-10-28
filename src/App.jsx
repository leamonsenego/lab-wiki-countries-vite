import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import { Routes, Route } from "react-router-dom";
import CountryDetails from "./pages/CountryDetailsPage";
import React, { useState, useEffect } from 'react';

function App() {



  return (
    <div className="App">
      <h1 className={"fixed-header"}>WikiCountries</h1>
      <Routes>
        <Route path={"/"} element={<HomePage/>}/>
        <Route path={"/:countryId"} element={<CountryDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
