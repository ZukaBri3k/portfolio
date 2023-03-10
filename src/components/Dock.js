import React, { Component } from "react";
import Logo from "../assets/images/vsCodeLogo.webp";
import Corbeille from "../assets/images/corbeille.webp";

export default class Dock extends Component {
  render() {
    return (
      <footer>
        <img src={Logo} alt="Logo de visual studio code" />
        <div></div>
        <img src={Corbeille} alt="Corbeille" />
      </footer>
    );
  }
}
