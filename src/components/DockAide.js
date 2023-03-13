import React from "react";
import Logo from "../assets/images/LogoAide.png";

const DockAide = (props) => {
  return (
    <button
      onClick={() => {
        props.fromChild("Aide");
      }}
    >
      <img src={Logo} alt="Aide d'utilisation" />
    </button>
  );
};

export default DockAide;
