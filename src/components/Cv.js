import React from "react";
import CV from "../assets/CV.pdf";

const Cv = (props) => {
  return (
    <section
      className="CV"
      style={{ display: props.display ? "block" : "none" }}
    >
      <div className="appbar">
        <div className="menu">
          <button
            onClick={() => {
              props.fromChild("cv");
            }}
          ></button>
          <button></button>
          <button></button>
        </div>
        <h1>CV</h1>
      </div>
      <iframe src={CV} title="CV" />
    </section>
  );
};

export default Cv;
