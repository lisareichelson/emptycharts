import LineChart from "./components/chart.js";
import logo from "./logo.svg";
import wine from "./wine.gif";
import "./App.css";
import React, { Component } from "react";
import { render } from "@testing-library/react";

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
        <LineChart />
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
