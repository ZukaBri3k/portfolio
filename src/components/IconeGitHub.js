import React from "react";
import Logo from "../assets/images/logoGitHub.svg";

const IconeGitHub = () => {
  return (
    <div className="iconeGitHub icone">
      <a href="https://github.com/ZukaBri3k" target="_blank" rel="noreferrer">
        <img src={Logo} alt="icone github" />
      </a>
      <p>GitHub</p>
    </div>
  );
};

export default IconeGitHub;
