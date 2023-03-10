import React from "react";
import Logo from "../assets/images/logoLinkedin.webp";

const IconeLinkedin = () => {
  return (
    <div className="iconeLinkedin icone">
      <a
        href="https://www.linkedin.com/in/kyrill-dumerchat-964a7a268/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Logo} alt="icone linkedin" />
      </a>
      <p>Linkedin</p>
    </div>
  );
};

export default IconeLinkedin;
