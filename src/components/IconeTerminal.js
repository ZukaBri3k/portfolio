import React from "react";
import Logo from "../assets/images/logoTerminal.webp";

const IconeTerminal = (props) => {
  return (
    <div className="iconeTerminal icone iconeCliquable">
      <button
        onClick={() => {
          props.fromChild("terminal");
        }}
        href="#"
      >
        <img src={Logo} alt="icone terminal" />
      </button>
      <p>Terminal</p>
    </div>
  );
};

export default IconeTerminal;
