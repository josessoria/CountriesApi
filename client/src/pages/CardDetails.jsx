import React from 'react'


export default function CardDetails(e) {
  console.log(e)
  return (
    <div className="card">
      <img src={e.flags}/>
      <h1>{e.name}</h1>
      <h2>{e.id}</h2>
      <p>Capital: {e.capital}</p>
      <p>Continente: {e.continente}</p>
      <p>Subregión: {e.subregion}</p>
      <p>Área: {new Intl.NumberFormat('de-DE').format(e.area)} Km2</p>
      <p>Población: {new Intl.NumberFormat('de-DE').format(e.poblacion)}</p> 
  </div> 
  )
}