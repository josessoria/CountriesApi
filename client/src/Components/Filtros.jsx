import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  filteredByContinents,
  filteredByAbc,
  filteredByPopulation,
  getActivities,
  filteredActivity,
  getAllCountries,
} from "../Redux/Actions.js";

function Nav({ filtered, setPageNum }) {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activityCreate);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  const filterContinentes = (e) => filtered(e, filteredByContinents);

  const filterAZ = (e) => filtered(e, filteredByAbc);
  const filterPopulation = (e) => {
    filtered(e, filteredByPopulation);
  };

  const filterActivity = (e) => {
    setPageNum(1);
    dispatch(filteredActivity(e.target.value));
  };

  const handleClick = (e) => {
    setPageNum(1);
    e.preventDefault();
    dispatch(getAllCountries());
    const select = document.querySelectorAll("select");
    select.forEach((e) => {
      e.value = "DEFAULT";
    });
  };

  console.log(activities);

  return (
    <div className="contenedor">
      <div className={"contenedor_seccion1"}>
        <h2 className={"contenedor_seccion1_filtrar"}>FILTRAR</h2>

        <div className={"contenedor_seccion1_filtrados"}>
          <select
            defaultValue={"DEFAULT"}
            onChange={filterContinentes}
            className={"filterContinentes"}
          >
            <option value={"DEFAULT"} disabled>
              Continentes
            </option>
            <option value={"All"}>Todos</option>
            <option value={"Africa"}>Africa</option>
            <option value={"Antarctic"}>Antarctica</option>
            <option value={"Americas"}>America</option>

            <option value={"Asia"}>Asia</option>
            <option value={"Europe"}>Europe</option>
            <option value={"Oceania"}>Oceania</option>
          </select>
          <select
            defaultValue={"DEFAULT"}
            onChange={filterAZ}
            className={"filterAZ"}
          >
            <option value={"DEFAULT"} disabled>
              Alfabeticamente
            </option>
            <option value={"Asc"}>A-Z</option>
            <option value={"Des"}>Z-A</option>
          </select>
        </div>

        <div className={"contenedor_seccion1_filtrados"}>
          <select
            defaultValue={"DEFAULT"}
            onChange={filterPopulation}
            className={"filterPopulation"}
          >
            <option value={"DEFAULT"} disabled>
              Población
            </option>
            <option value={"Asc"}>Mayor población</option>
            <option value={"Des"}>Menor población</option>
          </select>
        </div>

        <button onClick={handleClick} className={"contenedor_seccion1_btn"}>
          Cargar paises
        </button>

        <div className={"contenedor_seccion1_Act"}>
          <select
            id={"mySelect"}
            defaultValue={"DEFAULT"}
            onChange={filterActivity}
            className={"filterAct"}
          >
            <option value={"DEFAULT"} disabled>
              Seleccionar
            </option>
            {activities?.map((e) => {
              return (
                <option key={e.id} value={e.nombre}>
                  {e.nombre}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      {/* MODO RESPONSIVE */}
    </div>
  );
}

export default Nav;
