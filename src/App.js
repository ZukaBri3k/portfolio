import "./App.css";
import Header from "./components/Header.js";
import Dock from "./components/Dock";
import Terminale from "./components/Terminale";
import Cv from "./components/Cv";
import Aide from "./components/Aide";
import React, { useState } from "react";
import IconeGitHub from "./components/IconeGitHub";
import IconeLinkedin from "./components/IconeLinkedin";
import IconeTerminal from "./components/IconeTerminal";

function App() {
  const [displayCV, setDisplayCV] = useState(false);
  const [displayAide, setDisplayAide] = useState(false);
  const [displayTerminal, setDisplayTerminal] = useState(false);

  const getData = (data) => {
    if (data.toLowerCase() === "cv") {
      setDisplayCV(!displayCV);
    } else if (data.toLowerCase() === "aide") {
      setDisplayAide(!displayAide);
    } else if (data.toLowerCase() === "terminal") {
      setDisplayTerminal(!displayTerminal);
    }
    if (data.toLowerCase() === "quitter") {
      setDisplayAide(false);
      setDisplayCV(false);
    }
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      getData("quitter");
    }
  });

  return (
    <div className="App">
      <Header />
      <Terminale display={displayTerminal} fromChild={getData} />
      <Cv display={displayCV} fromChild={getData} />
      <Aide display={displayAide} fromChild={getData} />
      <IconeGitHub />
      <IconeLinkedin />
      <IconeTerminal display={displayTerminal} fromChild={getData} />
      <Dock />
    </div>
  );
}

export default App;
