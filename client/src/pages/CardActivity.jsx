import React from "react";
import "../Styles/CardActivity.css";

export default function CardActivityCreate({ e }) {
  return (
    <div className="carddetails" key={crypto.randomUUID()}>
      <h1> {e.nombre}</h1>
      <p>Duración: {e.duration} Horas </p>
      <p>Dificultad: {e.dificulty} Estrellas</p>
      <p>Temporada: {e.temporada}</p>

    </div>
  );
}
