import logo from "./logo.svg";
import "./App.css";
import money from "../src/money.png";
import ChangeRate from "./components/ChangeRate";
import React from "react";

function App() {
  return (
    <div className="App">
      <img src={money} alt="" className="money-img" />
      <h1>Exchange Rate Calculator</h1>
      <p>Choose the currency and the amounts to get the exchange rate</p>
      <div className="container">
        <ChangeRate />
      </div>
    </div>
  );
}

export default App;
