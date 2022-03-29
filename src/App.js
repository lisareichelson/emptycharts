import Chart from "./components/chart.js";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import logo from "./logo.svg";
import wine from "./wine.gif";
import "./App.css";
import React, { Component } from "react";
import { render } from "@testing-library/react";

const countries = ["A", "B", "C"]; //Change to load in all the country datas we have
const defaultCountry = countries[0]; //Change to whatever the U.S. is in the list

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {},
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={wine} width="150" height="150" alt="wine" />
          <h2>Welcome to WineAlyze</h2>
        </div>
        Select a Country to begin.
        <div
          // How can I center this? I resized it but thats all ive got.
          style={{
            display: "flex",
            width: "300px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Dropdown
            options={countries}
            onChange={this._onSelect}
            value={defaultCountry}
            placeholder="Select a country..."
          />
        </div>
        <Chart />
      </div>
    );
  }
}
export default App;

/*export default function App() {
  return (
    <div>
      <LineChart />
    </div>
  );
}*/
