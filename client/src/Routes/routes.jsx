import React from "react";
import { Routes, Route } from "react-router-dom";
import Landinpage from "../pages/Landinpage";

const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Landinpage />} />
    </Routes>
  );
};

export default Routers;
