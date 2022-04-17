import React from "react";
import "../App.css";
import { Title } from "../../App/Components/Title";
import { Link } from "react-router-dom";

function Index() {
  return (
    <div className="homePage">
      <Title />
      <div className="goHome">
        <p>
          Organiza tu día, crea una lista de tus cosas por hacer y mantén un
          orden en tus actividades.
        </p>
        <Link to="./home" className="buttonHome">
          Comenzar
        </Link>
      </div>
    </div>
  );
}

export { Index };
