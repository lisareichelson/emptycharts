import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./App.css";
import React, { Component } from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeScreen from "./components/Home";
import Consumption from "./components/Consumption";
import Population from "./components/Population";
import Economy from "./components/Economy";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/components/Consumption" element={<Consumption />} />
          <Route path="/components/Population" element={<Population />} />
          <Route path="/components/Economy" element={<Economy />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
