import React from "react";
import Illu from "../assets/images/illustrationFreyssupport.png";

const Aide = (props) => {
  return (
    <section
      className="projet"
      style={{ display: props.display ? "block" : "none" }}
    >
      <div className="appbar">
        <div className="menu">
          <button
            onClick={() => {
              props.fromChild("projet");
            }}
          ></button>
          <button></button>
          <button></button>
        </div>
        <h1>Liste de mes projets</h1>
      </div>
      <div className="listeProjet">
        <div className="projetPres">
          <a
            href="https://freyssupport.web.app"
            target="_blank"
            rel="noreferrer"
          >
            <h2>FreysSupport</h2>
          </a>
          <div>
            <a
              href="https://freyssupport.web.app"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Illu} alt="Illustration freyssupport" />
            </a>
            <div>
              <p>
                FreysSupport est un site web collaboratif visant à mettre en
                contact les élèves du lycée Eugènes Freyssinet via leur niveau
                d'étude ainsi que leurs options choisies.
              </p>
              <p className="techno">
                <b>Technologie utilisée:</b> REACT, Bootstrap, Firebase
              </p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </section>
  );
};

export default Aide;
