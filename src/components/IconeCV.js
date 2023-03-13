import React from "react";
import Logo from "../assets/images/logoPDF.png";

const IconeGitHub = (props) => {
  return (
    <div className="iconeCV icone iconeCliquable">
      <button onClick={() => props.fromChild("CV")}>
        <img src={Logo} alt="icone PDF" />
      </button>
      <p>CV</p>
    </div>
  );
};

export default IconeGitHub;
