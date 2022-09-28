import React from "react";
import "../Styles/LandinPage.css";
import Map from "../Assets/map.svg";

const Landinpage = () => {
  return (
    <div className="HomeScreen">
      <div className="headerLandingPage">
        <span>Countries</span>
      </div>
      <div className="contentLandingPage">
        <div className="titleLanding">
          <h1>Encontrá tu lugar</h1>
          <p>
           Descubrí entre cientos de paises las actividades de cada lugar su Cultura, Lenguaje, Entre otras caracteristicas únicas de cada país, ve mas allá de tus fronteras, encuentra tu sitio.
          </p>
          <div className="buttontitle">
            <button>Explore</button>
          </div>
        </div>
        <div className="imglanding">
          <img src={Map} alt="" />
        </div>
      </div>
      <div className="statsLanding">
        <div className="StatPais">
          <div className="Statsnumber">300+</div>
          <div className="Statsinfo">Paises</div>
        </div>
        <div className="StatPais">
          <div className="Statsnumber">242+</div>
          <div className="Statsinfo">Lenguajes</div>
        </div>
        <div className="StatPais">
          <div className="Statsnumber">132+</div>
          <div className="Statsinfo">Actividades</div>
        </div>
      </div>
    </div>
  );
};

export default Landinpage;
