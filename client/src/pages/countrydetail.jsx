import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryDetail } from "../Redux/Actions";
import { Link, useParams } from "react-router-dom";
import CardActivity from "./CardActivity.jsx";
import CardDetails from "./CardDetails.jsx";
import Header from "../Components/Header";
import "../Styles/countrydetails.css";

export default function CountryDetail() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const country = useSelector((state) => state.buscarCountry);

  useEffect(() => {
    dispatch(getCountryDetail(id));
  }, [dispatch, id]);

  return (
    <>
      <Header />
      <div className="contenedordetails">
        <div className="imageandetail">
          <div className="flagsimage">
            <img src={country.flags} alt="" />
          </div>
          <div className="paisdetail">
            <h1>{country.name}</h1>
            <h2>{country.subregion} </h2>
            <p>Capital: {country.capital} </p>
            <p>Population: {country.poblacion} </p>
            <p>Area: {country.area} Km2 </p>
          </div>
        </div>

        <h1>Actividades</h1>
        <div className="actividades">
          {country.activities?.map((e, i) => {
            return <CardActivity e={e} key={i} />;
          })}
        </div>

        {
          //   country?.map(e=>{
          //     return(
          //       <div key={e.id} className="countryDetail">
          //         <CardDetails
          //           e={e}
          //         />
          //         <div className="activity">
          //             <h1>Actividades</h1>
          //             {
          //               country[0]?.activities.map(e=> <CardActivity e={e} key={crypto.randomUUID()}/>)
          //             }
          //             <Link to='/activity' className="activity_link">
          //               Crear Actividad
          //             </Link>
          //         </div>
          //       </div>
          //     )
          //   })
        }
      </div>
    </>
  );
}
