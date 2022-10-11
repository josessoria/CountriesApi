import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import "../Styles/Home.css";
import Card from "../Components/Card";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../Redux/Actions";
import Paginado from "../Components/Paginado";
import Searchbar from "../Components/Searchbar";
import Filtros from "../Components/Filtros";

const Home = () => {
  const countries = useSelector((state) => state.filtro);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [CountryPerPage, setCountryPerPage] = useState(9);
  const [render,setRender] = useState('')       

  const indexOfLastCountry = currentPage * CountryPerPage;
  const indexOfFirstCountry = indexOfLastCountry - CountryPerPage;

  const paisesActuales = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  const paginate = (page) => {
    setCurrentPage(page);
    if (page !== 1) {
      setCountryPerPage(10);
    } else {
      setCountryPerPage(9);
    }
  };




  const filtered=(e,action)=>{
    e.preventDefault()
    setCurrentPage(1)
    setRender(e.target.value)
    dispatch(action(e.target.value))
  }

  return (
    <div>
      <Header />

      <div className="homeContainer">
        <div className="filterVar">
          <Filtros setPageNum={setCurrentPage} filtered={filtered} />
        </div>
        <div className="results">
          <h2>Results</h2>
          <div className="searchbar">
            <Paginado
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              CountryPerPage={CountryPerPage}
              totalPosts={countries.length}
              paginate={paginate}
            />
            <Searchbar />
          </div>
          <div className="cardscontainer">
            {paisesActuales.map((e) => {
              return <Card key={e.id} props={e} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
