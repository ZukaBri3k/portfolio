import React, { Component } from "react";
import Logo from "../assets/images/appleLogo.webp";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <img src={Logo} alt="Logo apple" />
          <p>Kyrill Dumerchat</p>
        </div>
      </header>
    );
  }
}
