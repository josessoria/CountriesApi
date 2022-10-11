import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Card.css";

const Card = (props) => {
  return (
    <div className="cards">
      <Link to={"/countries/" + props.props.id}>
        <div className="imgflag">
          <img src={props.props.flags} alt="" />
        </div>

        <h1>{props.props.name} - <span> {props.props.continente}</span> </h1>
      </Link>
    </div>
  )
}

export default Card;
