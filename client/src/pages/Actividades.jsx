import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../Components/Header";
import { getAllCountries, postActivity } from "../Redux/Actions";
import "../Styles/Actividades.css";

import Validate from "../Components/validate";

const Actividades = () => {
  const countries = useSelector((state) => state.countriesAll);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  const [err, setErr] = useState({});
  const [input, setInput] = useState({
    nombre: "",
    dificulty: "",
    duration: "",
    temporada: "",
    countries: [],
  });

  //Capturo y valido lo que el usuario escribe
  const handleChange = (e) => {
    console.log(e.target.name);
    setInput({ ...input, [e.target.name]: e.target.value });
    setErr(Validate({ ...input, [e.target.name]: e.target.value }));

    console.log(input)
  };

  const handleSelect = (e) => {

    let rep = input.countries.filter((elem) => elem === e.target.value);

    if (rep.length) {
      alert("No se permiten repetidos");
      e.target.value = "DEFAULT";
      return;
    }
    setInput({ ...input, countries: [...input.countries, e.target.value] });


    // setTimeout(()=>{
    //   e.target.value='DEFAULT'
    // },2000)
  };

  const handleClick = (e) => {
    e.preventDefault();
    // dispatch(postActivity(input))
    if (
      input.nombre &&
      input.dificulty  &&
      input.duration &&
      input.temporada &&
      input.countries.length >= 0
    ) {
      postActivity(input);
      alert("Actividad creada");
    } else {
      alert("Faltan datos");
    }

    // history.push('./Home')
  };

  const handleDelete = (e) => {
    setInput({
      ...input,
      countries: input.countries.filter((country) => country !== e),
    });
    setErr(
      Validate({
        ...input,
        countries: input.countries.filter((country) => country !== e),
      })
    );

    const select = document.getElementById("#mySelect");
    const option = document.getElementById("#myId");
    select.value = option.value;
  };

  return (
    <>
      <Header />
      <div className="actividades">
        <div className="formactivity">
          <h1>Crear Actividad</h1>
          <h3>Datos (*) son obligatorios</h3>
          <form className="formcreateactivity" action="">
            <div className="containerlabel">
              <label htmlFor="pais">País (*)</label>
              <select
                name="countries"
                id={"#mySelect"}
                defaultValue={"DEFAULT"}
                onChange={handleSelect}
                
              >
                <option
                  id={"#myId"}
                  name="countries"
                  value={"DEFAULT"}
                  disabled
                  hidden
                >
                  Choose here
                </option>
                {countries.map((t, i) => {
                  return (
                    <option key={i} value={t.id} id={"#myId"}>
                      {t.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="containerlabel">
              <label htmlFor="nombre">Nombre (*)</label>
              <input
                type="text"
                name="nombre"
                onChange={handleChange}
                placeholder="Introduce un nombre para la actividad"
              />
            </div>
            <div className="containerlabel">
              <label htmlFor="duracion">Duración (*)</label>
              <input
                type="number"
                placeholder="horas"
                name="duration"
                onChange={handleChange}
              />
            </div>
            <div className="containerlabel">
              <label htmlFor="dificulty" >Dificultad (*)</label>
              <input
                type="range"
                min="1"
                max="5"

                name="dificulty"
                list="tickmarks"
                onChange={handleChange}
              />
              <datalist id="tickmarks">
                <option value="1"></option>
                <option value="2"></option>
                <option value="3"></option>
                <option value="4"></option>
                <option value="5"></option>
              </datalist>
            </div>

            <div className="containerlabel">
              <label htmlFor="temporada">Temporada (*)</label>
              <select
                name="temporada"
                defaultValue={"DEFAULT"}
                onChange={handleChange}
              >
                <option value="DEFAULT" disabled hidden>
                  Choose here
                </option>
                <option value="Verano">Verano</option>
                <option value="Invierno">Invierno</option>
                <option value="Primavera">Primavera</option>
                <option value="Otoño">Otoño</option>
              </select>
            </div>

            <div className="boton">
              <button type="submit" onClick={(e) => handleClick(e)}>
                Crear
              </button>
            </div>
          </form>
          {input.countries.length ? (
            <div className="selectCountry">
              <label>PAISES SELECCIONADOS</label>
              {input.countries?.map((e) => {
                return (
                  <div
                    key={crypto.randomUUID()}
                    className="selectCountry_option"
                  >
                    <p>{e}</p>
                    <button type="submit" onClick={() => handleDelete(e)}>
                      x
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="selectCountry">NO HAY PAISES SELECCIONADOS</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Actividades;
