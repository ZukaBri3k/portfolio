import React from "react";

const Aide = (props) => {
  return (
    <section
      className="aide"
      style={{ display: props.display ? "block" : "none" }}
    >
      <div className="appbar">
        <div className="menu">
          <button
            onClick={() => {
              props.fromChild("aide");
            }}
          ></button>
          <button></button>
          <button></button>
        </div>
        <h1>Aide sur les commandes</h1>
      </div>
      <div>
        <a
          href="https://github.com/ZukaBri3k/portfolio/blob/main/README.md"
          target="_blank"
          rel="noreferrer"
        >
          Cliquez ici pour obtenir de l'aide !
        </a>
      </div>
    </section>
  );
};

export default Aide;
