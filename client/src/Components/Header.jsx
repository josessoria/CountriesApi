import React, { useState } from "react";
import "../Styles/Header.css";
import { Link } from "react-router-dom";
import menu from "../Assets/menu.png";

const D = () => {
  const [Menu, setMenu] = useState(false);

  const HandleState = () => {
    setMenu(!Menu)
    console.log(Menu)
  };
  return (
    <div className="Header">
      <Link to="/home">
        <div className="Logo">Countries</div>
      </Link>

      <div className="Header__list">
        <div className="Header__list-items">
          <div className="itemsheader">
            <Link to="/home" className="itemheader">
              <button>Home</button>
            </Link>
            <Link to="/activity" className="itemheader">
              <button>Activity</button>
            </Link>
            <Link to="/about" className="itemheader">
              <button>About</button>
            </Link>
          </div>

          <div className="menucontent">
            <img src={menu} alt="" onClick={HandleState} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default D;
