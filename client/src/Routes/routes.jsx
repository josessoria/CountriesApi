import React from "react";
import { Routes, Route } from "react-router-dom";
import Landinpage from "../pages/Landinpage";
import Home from "../pages/Home";
import Actividades from "../pages/Actividades";
import CountryDetail from "../pages/countrydetail";

const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Landinpage />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/Activity" element={<Actividades />} />
      <Route exact path="/countries/:id" element={<CountryDetail />} />
    </Routes>
  );
};

export default Routers;
