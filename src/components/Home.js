import wine from "./images/wine.gif";
import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { render } from "@testing-library/react";

const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="App-header">
        <img src={wine} width="150" height="150" alt="wine" />
        <h2>Welcome to WineAlyze</h2>
      </div>
      <h1
        style={{
          display: "flex",
          color: "black",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        What would you like to anaylze?
      </h1>
      <button
        style={{
          position: "absolute",
          left: "25%",
          transform: "translateX(-50%)",
        }}
        onClick={() => navigate("/components/Population")}
      >
        Population Data
      </button>
      <button
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        onClick={() => navigate("/components/Consumption")}
      >
        Consumption Data
      </button>
      <button
        style={{
          position: "absolute",
          left: "75%",
          transform: "translateX(-50%)",
        }}
        onClick={() => navigate("/components/Economy")}
      >
        Economic Data
      </button>
    </>
  );
};
export default HomeScreen;
