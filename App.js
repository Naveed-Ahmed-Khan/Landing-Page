import React from "react";
import Card from "./Components/UI/Card";
import img1 from "./Components/images/pattern-background-desktop.svg";
import "./App.css";

function App() {
  return (
    <div className="div">
      <img className="img1" src={img1} alt="backgroung" />
      <Card />
    </div>
  );
}

export default App;
