import React from "react";
import Logo from "../assets/images/vsCodeLogo.webp";
import Corbeille from "../assets/images/corbeille.webp";
import DockAide from "./DockAide";

const Dock = (props) => {
  return (
    <footer>
      <img
        src={Logo}
        alt="Logo de visual studio code"
        onClick={() => alert("VsCode")}
      />
      <DockAide fromChild={props.fromChild} />
      <div></div>
      <img src={Corbeille} alt="Corbeille" />
    </footer>
  );
};

export default Dock;
