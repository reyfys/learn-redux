import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Card from "./Component/Card";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Card />
    </div>
  );
}

export default App;
