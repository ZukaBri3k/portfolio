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
      <h1>Aide</h1>
    </section>
  );
};

export default Aide;
