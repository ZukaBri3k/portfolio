import React, { useEffect, useRef, useState } from "react";

const Terminale = (props) => {
  const inputRef = useRef(0);
  const displayLog = useRef(0);
  const [log, setLog] = useState([]);
  const [listeLog, setListeLog] = useState();

  document.addEventListener("keypress", (e) => {
    if (
      e.key === "Enter" &&
      inputRef.current.value !== undefined &&
      inputRef.current.value !== "" &&
      inputRef.current.value !== null
    ) {
      //console.log(inputRef.current.value);
      const time = new Date();
      setLog(
        log.push([
          "[",
          time.getHours(),
          ":",
          time.getMinutes(),
          ":",
          time.getSeconds(),
          "]",
          " > ",
          inputRef.current.value,
        ])
      );
      props.fromChild(inputRef.current.value);
      //console.log(log);
      setListeLog(
        log.map((item, i) => (
          <li key={i}>
            <u>{item[0]}</u>
            <b>{item[1]}</b>
            <u>{item[2]}</u>
            <b>{item[3]}</b>
            <u>{item[4]}</u>
            <b>{item[5]}</b>
            <u>{item[6]}</u>
            {item[7]}
            <i>{item[8]}</i>
          </li>
        ))
      );
      inputRef.current.value = "";
    }
  });

  useEffect(() => {
    displayLog.current.scrollTop = displayLog.current.scrollHeight;
  }, [listeLog]);

  return (
    <section
      className="terminale"
      style={{ display: props.display ? "flex" : "none" }}
    >
      <div className="appbar">
        <div className="menu">
          <button onClick={() => props.fromChild("terminal")}></button>
          <button></button>
          <button></button>
        </div>
        <h1>Terminal</h1>
        <h2>Tapez aide + entrer pour plus d'aide</h2>
      </div>
      <div className="LogInput">
        <ul ref={displayLog} className="log">
          {listeLog}
        </ul>
        <div className="input">
          <p>
            <u>@</u>
            <b>Kyrilldumerchat</b>
            <u>{">"}</u>
          </p>
          <input ref={inputRef} type="text" autoFocus />
        </div>
      </div>
    </section>
  );
};

export default Terminale;
