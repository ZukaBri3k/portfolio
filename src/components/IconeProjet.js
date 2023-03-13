import React from "react";
import Logo from "../assets/images/logoDossier.webp";

const IconeProjet = (props) => {
  return (
    <div className="iconeProjet icone iconeCliquable">
      <button
        onClick={() => {
          props.fromChild("projet");
        }}
      >
        <img src={Logo} alt="icone terminal" />
      </button>
      <p>Projet</p>
    </div>
  );
};

export default IconeProjet;
