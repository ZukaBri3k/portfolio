import React from "react";
import IlluFreyssupport from "../assets/images/illustrationFreyssupport.png";
import IlluPuissance4 from "../assets/images/illuPuissance4.png";

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
              props.fromChild("ls projet");
            }}
          ></button>
          <button></button>
          <button></button>
        </div>
        <h1>Liste de mes projets</h1>
      </div>
      <div className="listeProjet">
        <div className="projetPres freyssupport">
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
              <img src={IlluFreyssupport} alt="Illustration freyssupport" />
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
        <div className="projetPres puissance4">
          <a
            href="https://github.com/ZukaBri3k/puissance4/tree/dev_fonctions/main.c"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Puissance 4</h2>
          </a>
          <div>
            <a
              href="https://github.com/ZukaBri3k/puissance4/tree/dev_fonctions/main.c"
              target="_blank"
              rel="noreferrer"
            >
              <img src={IlluPuissance4} alt="Illustration projet puissance 4" />
            </a>
            <div>
              <p>
                Projet étudiant visant à créer un puissance 4 en ligne de
                commande à l'aide du langage C.
              </p>
              <p className="techno">
                <b>Technologie utilisée:</b> C.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aide;
