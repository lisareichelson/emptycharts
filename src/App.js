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
import Price from "./components/Price";
import Wealth from "./components/Wealth";
import Quality from "./components/Quality";
import Fertility from "./components/Fertility";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/components/Consumption" element={<Consumption />} />
          <Route path="/components/Population" element={<Population />} />
          <Route path="/components/Economy" element={<Economy />} />
          <Route path="/components/Price" element={<Price />} />
          <Route path="/components/Wealth" element={<Wealth />} />
          <Route path="/components/Quality" element={<Quality />} />
          <Route path="/components/Fertility" element={<Fertility />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
