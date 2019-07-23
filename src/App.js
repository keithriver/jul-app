import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import clr from "randomcolor";

function myNormalFunction(a) {
  console.log(a);
}

const myNormalFunctionConst = function(a) {
  console.log(a);
};

const myShorthandFunction = a => {
  console.log(a);
};

const myShorthandFunctionButShorter = a => console.log(a);

function App() {
  const a = clr();
  const [iro, setIro] = useState("#afffc3");

  const handleOnChange = ab => {
    setIro(ab);
  };
  return (
    <div className="App custom">
      {iro}
      <div>
        <button
          onClick={() => {
            const newClr = clr();
            setIro(newClr);
          }}
          style={{ color: iro, backgroundColor: "pink" }}
        >
          {" "}
          IRO botan{" "}
        </button>
      </div>
      <input
        value={iro}
        onChange={event => handleOnChange(event.target.value)}
      />
      <img src={logo} className="App-logo" alt="logo" />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. #afffc3
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
